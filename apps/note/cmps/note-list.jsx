
import { NoteEditMenu } from './note-edit-menu.jsx';
import { NotePreview } from './note-preview.jsx';

export function NoteList({ notes, onRemoveNote }) {
    return <section className='note-list-section' >
        <ul className='note-list clean-list'>
            {
                notes.map(note => <li className='note' key={note.id}>
                    <NotePreview note={note} />
                    <NoteEditMenu note={note} onRemoveNote={onRemoveNote} />

                </li>)
            }

        </ul>
    </section>

}
