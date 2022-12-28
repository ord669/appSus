const { useRef, useState, useEffect } = React

export function NoteCreate() {
    const [cmpType, setCmpType] = useState('Hello')

    return <section className='note-create' >
        <h1>Hello from note create</h1>


        <select onChange={ev => setCmpType(ev.target.value)}>
            <option value="note-txt">Note-Text</option>
            <option value="note-img">Note-Image</option>
            <option value="note-video">Note-Video</option>
            <option value="note-todos">Note-Todos</option>
        </select>
        <DynamicCmp name="Puk" cmpType={cmpType} />


        <hr />
    </section>
}

function DynamicCmp(props) {
    switch (props.cmpType) {
        case 'note-txt':
            return <NoteTxt {...props} />
        case 'note-img':
            return <NoteImg {...props} />
        case 'note-video':
            return <NoteVideo {...props} />
        case 'note-todos':
            return <NoteTodos {...props} />
    }
}

function NoteTxt({ name }) {
    return <h1>NoteTxt {name}</h1>
}
function NoteImg({ name }) {
    return <h1>NoteImg {name}</h1>
}
function NoteVideo({ name }) {
    return <h1>NoteVideo {name}</h1>
}
function NoteTodos({ name }) {
    return <h1>NoteTodos {name}</h1>
}