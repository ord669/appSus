const { useState, useEffect } = React

import { NoteCreate } from '../cmps/note-create.jsx';
import { NoteFilter } from '../cmps/note-filter.jsx';
import { NoteList } from '../cmps/note-list.jsx';
import { NoteSideBar } from '../cmps/note-side-bar.jsx';

import { noteService } from '../services/note.service.js';


export function NoteIndex() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        loadNotes()
    }, [])


    function loadNotes() {
        noteService.query()
            .then((notes) => {
                setNotes(notes)
            })
    }

    console.log('notes:', notes)

    return <section className="note-index">
        <NoteFilter />
        <main className="main-note-layout">
            <NoteCreate />
            <NoteList notes={notes} />

        </main>
        <NoteSideBar />

    </section>

}
