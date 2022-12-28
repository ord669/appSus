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
        const noteFromService = noteService.getNotes()
        console.log('motess:', noteFromService)
        setNotes(noteFromService)
    }

    console.log('notes:', notes)

    return <section className="note-index">
        <NoteFilter />
        <NoteCreate />
        <NoteList notes={notes} />
        <NoteSideBar />

    </section>

}
