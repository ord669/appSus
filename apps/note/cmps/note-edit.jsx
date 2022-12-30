import { noteService } from '../services/note.service.js';
import { showSuccessMsg } from "../../../services/event-bus.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate, Link, useOutletContext } = ReactRouterDOM

export function NoteEdit() {
    const { noteId } = useParams()
    const navigate = useNavigate()
    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())
    const onUpdateNote = useOutletContext()

    useEffect(() => {
        loadNote()
    }, [])

    function loadNote() {
        noteService.get(noteId)
            .then((note) => {
                setNoteToEdit(note)
            })
            .catch((err) => {
                console.log('Had issues in note details', err)
                navigate('/note')
            })
    }


    function handleChange({ target }) {
        let { value, name: field } = target
        setNoteToEdit((prevTxt) => ({ ...prevTxt, info: { ...prevTxt.info, [field]: value } }))
    }


    function onEditNote(ev) {
        ev.preventDefault()
        noteService.save(noteToEdit).then((updateNote) => {
            onUpdateNote(updateNote)
            navigate('/note')
        })
    }


    return <section className='note-edit'>
        <form onSubmit={onEditNote} className="note-edit-form">
            <textarea className="edit-note-input"
                id="txt"
                name="txt"
                placeholder="Enter note"
                value={noteToEdit.info.txt}
                onChange={handleChange}>
            </textarea>
            <button className="btn-edit-note">Save edit</button>
            <Link className="btn-edit-cancel" to="/note">Cancel</Link>
        </form>

    </section>

}