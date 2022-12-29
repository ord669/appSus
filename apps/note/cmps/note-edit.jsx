import { noteService } from '../services/note.service.js';
import { showSuccessMsg } from "../../../services/event-bus.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate, Link, useOutletContext } = ReactRouterDOM

export function NoteEdit(onUpdateNote) {
    const { noteId } = useParams()
    const navigate = useNavigate()
    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())
    const { onUpdateNote } = useOutletContext()


    useEffect(() => {
        loadNote()
    }, [])

    function loadNote() {
        noteService.get(noteId)
            .then((note) => {
                setNoteToEdit(note)
                console.log('noteToEdit:', noteToEdit)

            })
            .catch((err) => {
                console.log('Had issues in note details', err)
                navigate('/note')
            })
    }


    function handleChange({ target }) {

        let { value, name: field } = target
        console.log('value:', value)
        setNoteToEdit((prevTxt) => ({ ...prevTxt, info: { ...prevTxt.info, [field]: value } }))

    }


    function onEditNote(ev) {
        ev.preventDefault()
        console.log('ev.target.value:', noteToEdit)
        noteService.save(noteToEdit).then((updateNote) => {
            console.log('updateNote', updateNote);
            // onUpdateNote(updateNote)

            // showSuccessMsg('Note updated')
            navigate('/note')
        })
    }


    return <section className='note-edit'>
        <h1>hello {noteId} </h1>


        <form onSubmit={onEditNote} className="note-edit-form">

            <textarea
                id="txt"
                name="txt"
                placeholder="Enter note"
                value={noteToEdit.info.txt}
                onChange={handleChange}>
            </textarea>
            <button className="btn-edit-note">Save edit</button>
            <Link to="/note">Cancel</Link>
        </form>

    </section>

}