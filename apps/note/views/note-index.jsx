const { useState, useEffect } = React

import { NoteCreate } from '../cmps/note-create.jsx';
import { NoteFilter } from '../cmps/note-filter.jsx';
import { NoteList } from '../cmps/note-list.jsx';
import { NoteSideBar } from '../cmps/note-side-bar.jsx';

import { noteService } from '../services/note.service.js';


export function NoteIndex() {

    const [notes, setNotes] = useState(null)

    useEffect(() => {
        loadNotes()
    }, [])


    function loadNotes() {
        noteService.query()
            .then(setNotes)

    }

    function onSaveNote(NoteToAdd) {
        noteService.save(NoteToAdd)
            .then(() => loadNotes())
            // showSuccessMsg('Book saved!')
            .catch((err) => {
                console.log('Had issues removing', err)
                // showErrorMsg('Could not remove car')
            })
    }

    function onRemoveNote(noteId) {

        noteService.remove(noteId)
            .then(() => {
                const updatedNote = notes.filter(note => note.id !== noteId)
                setNotes(updatedNote)
                // showSuccessMsg('Car removed')
            })
            .catch((err) => {
                console.log('Had issues removing', err)
                // showErrorMsg('Could not remove car')
            })
    }


    console.log('notes:', notes)

    return <section className="note-index">
        <NoteFilter />
        <main className="main-note-layout">
            <NoteCreate onSaveNote={onSaveNote} />
            {notes && <NoteList notes={notes} onRemoveNote={onRemoveNote} />}

        </main>
        <NoteSideBar />

    </section>

}
