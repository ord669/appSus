
import { NoteEditMenu } from './note-edit-menu.jsx';
import { NotePreview } from './note-preview.jsx';

export function NoteList({ notes, onRemoveNote, onUpdateNote, onClickNote }) {

    return <section className='note-list-section' >
        <ul className='note-list clean-list'>
            {
                notes.map(note => <li className='note' style={{ backgroundColor: note.style.backgroundColor }}
                    key={note.id} onClick={() => onClickNote(note.id)} >
                    <NotePreview note={note} />
                    <NoteEditMenu note={note} onRemoveNote={onRemoveNote} onUpdateNote={onUpdateNote} />

                </li>)
            }
        </ul>
    </section>

}
