
import { NotePreview } from './note-preview.jsx';

export function NoteList({ notes }) {
    console.log('notes from note list:', notes)

    return <section className='note-list-section' >
        <ul className='note-list'>
            {
                notes.map(note => <li key={note.id}>
                    <NotePreview note={note} />
                </li>)
            }

        </ul>
        <h1>Hello from note list</h1>

    </section>

}
