import { NoteFilter } from '../cmps/note-filter.jsx';
import { NoteList } from '../cmps/note-list.jsx';
import { NoteSideBar } from '../cmps/note-side-bar.jsx';

export function NoteIndex() {

    return <section className="note-index">
        {/* note-header */}
        {/* note-side-bar */}
        {/* note-main-layout */}

        <NoteFilter />
        <NoteList />
        <NoteSideBar />

    </section>

}
