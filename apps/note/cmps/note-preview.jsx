import { DataTableRow } from './note-todo-table.jsx'

const { useState, useEffect } = React

export function NotePreview({ note }) {


    console.log('note:', note)


    return <article className='note-preview' >
        <h1>Hello from note preview</h1>
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
    console.log('txt:', txt)
    console.log('info:', info)


    return (
        <div>
            {txt}
        </div>
    )

}
function NoteTodos({ info }) {
    const { label, todos } = info
    console.log('label:', label)
    console.log('todos:', todos)

    return (
        <div>
            <p>{label}</p>
            <table>
                <tbody>
                    {todos.map(todo => <DataTableRow key={todo.id} todo={todo} />)}

                </tbody>
            </table>
        </div>
    )

}
function NoteImg({ info, val = '', onChangeVal }) {

}