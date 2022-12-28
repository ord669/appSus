
import { NotePreview } from './note-preview.jsx';

export function NoteList({ notes }) {
    console.log('notes from note list:', notes)

    return <section className='note-list-section' >
        <ul className='note-list clean-list'>
            {
                notes.map(note => <li key={note.id}>
                    <NotePreview note={note} />
                </li>)
            }

        </ul>
    </section>

}
