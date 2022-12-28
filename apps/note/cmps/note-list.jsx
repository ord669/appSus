
import { NoteEditMenu } from './note-edit-menu.jsx';
import { NotePreview } from './note-preview.jsx';

export function NoteList({ notes, onRemoveNote, onChangeBgc }) {




    return <section className='note-list-section' >
        <ul className='note-list clean-list'>
            {
                notes.map(note => <li className='note' style={{ backgroundColor: note.style.backgroundColor }} key={note.id}>
                    <NotePreview note={note} />
                    <NoteEditMenu note={note} onRemoveNote={onRemoveNote} onChangeBgc={onChangeBgc} />

                </li>)
            }

        </ul>
    </section>

}
