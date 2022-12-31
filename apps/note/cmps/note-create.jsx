const { useState, useEffect } = React

import { NoteEditMenu } from './note-edit-menu.jsx';
import { noteService } from '../services/note.service.js'

export function NoteCreate({ onSaveNote }) {
    const [cmpType, setCmpType] = useState('Hello')
    const [NoteToAdd, setNoteToAdd] = useState(noteService.getEmptyNote())

    function handleChange({ target }) {
        let { value, name: field } = target
        console.log('value:', value)
        setNoteToAdd((prevTxt) => ({ ...prevTxt, info: { ...prevTxt.info, [field]: value } }))
    }

    function onSubmitNote(ev) {
        ev.preventDefault()
        onSaveNote(NoteToAdd)
        setNoteToAdd(noteService.getEmptyNote())
    }

    function onChangePinned(ev) {
        ev.stopPropagation()
        const newNote = { ...NoteToAdd }
        newNote.isPinned = !newNote.isPinned
        setNoteToAdd(newNote)
    }

    function handleChangeColor(ev) {
        let { value, name: field } = ev.target
        const newNote = { ...NoteToAdd, style: { ...NoteToAdd.style, [field]: value } }
        setNoteToAdd(newNote)
    }


    return <section className='note-create' >
        <form onSubmit={onSubmitNote} className="add-note-form">

            <textarea className="add-note-input"
                id="txt"
                name="txt"
                placeholder="Enter note"
                value={NoteToAdd.info.txt}
                onChange={handleChange}>
            </textarea>
            <div className="add-note-edit-btn">
                {!NoteToAdd.isPinned && <button onClick={onChangePinned} className="clean-btn fa-solid thumbtack un-pinned" ></button>}
                {NoteToAdd.isPinned && <button onClick={onChangePinned} className="clean-btn fa-solid thumbtack"></button>}
                <button className="btn-design color-change clean-btn fa-solid palette"></button>
                <input
                    onClick={(ev) => ev.stopPropagation()}
                    className="bgc-input"
                    type="color"
                    name="backgroundColor"
                    id="backgroundColor"
                    value={NoteToAdd.style.backgroundColor}
                    onChange={handleChangeColor}
                />


                <button className="btn-add-note clean-btn">Add Note</button>
            </div>
        </form>



    </section>
}




{/* <a className="fa-solid a" href=""></a>
<a className="fa-solid image" href=""></a>
<a className="fa-brand youtube" href=""></a>
<a className="fa-solid list" href=""></a> */}

{/* <DynamicCmp name="Puk" cmpType={cmpType} /> */ }


// function DynamicCmp(props) {
//     switch (props.cmpType) {
//         case 'note-txt':
//             return <NoteTxt {...props} />
//         case 'note-img':
//             return <NoteImg {...props} />
//         case 'note-video':
//             return <NoteVideo {...props} />
//         case 'note-todos':
//             return <NoteTodos {...props} />
//     }
// }

// function NoteTxt({ name }) {
//     return <form className="review-form">
//         <input type="text"
//             id="book-name"
//             name="bookName"
//             placeholder={name} />
//         {/* // value={search}
//             // onChange={handleChange} */}
//     </form>
//     // <h1>NoteTxt {name}</h1>
// }
// function NoteImg({ name }) {
//     return <h1>NoteImg {name}</h1>
// }
// function NoteVideo({ name }) {
//     return <h1>NoteVideo {name}</h1>
// }
// function NoteTodos({ name }) {
//     return <h1>NoteTodos {name}</h1>
// }
