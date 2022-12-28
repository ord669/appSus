import { NoteCreate } from './note-create.jsx';
import { NotePreview } from './note-preview.jsx';

export function NoteList() {

    return <section className='note-list' >
        <h1>Hello from note list</h1>

        <NoteCreate />
        <NotePreview />
    </section>

}
