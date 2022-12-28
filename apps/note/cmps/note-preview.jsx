import { DataTableRow } from './note-todo-table.jsx'

const { useState, useEffect } = React

export function NotePreview({ note }) {


    console.log('note:', note)


    return <article className='note-preview' >
        <DynamicCmp
            type={note.type} info={note.info}
        />
    </article>
}



function DynamicCmp(props) {
    switch (props.type) {
        case 'note-txt':
            return <NoteTxt {...props} />
        case 'note-todos':
            return <NoteTodos {...props} />
        case 'note-img':
            return <NoteImg {...props} />
    }
}


function NoteTxt({ info, val = '', onChangeVal }) {
    const { txt } = info
    return (
        <div className="">
            {txt}
        </div>
    )

}

function onRemoveTodo(todoId) {
    console.log(':', todoId)

}

function NoteTodos({ info }) {
    const { label, todos } = info

    return (
        <div>
            <h1>{label}</h1>
            <table className="todos-table">
                <tbody>
                    {todos.map(todo => <DataTableRow key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />)}

                </tbody>
            </table>
        </div>
    )

}
function NoteImg({ info, val = '', onChangeVal }) {
    const { title, url } = info
    return <div>
        <h1>{title}</h1>
        <img src={url} alt={title} />
    </div>

}