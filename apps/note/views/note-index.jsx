const { Outlet, Link, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { UserMsg } from '../../../cmps/user-msg.jsx';
import { NoteCreate } from '../cmps/note-create.jsx';
import { NoteFilter } from '../cmps/note-filter.jsx';
import { NoteList } from '../cmps/note-list.jsx';
import { NoteSideBar } from '../cmps/note-side-bar.jsx';
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"

import { noteService } from '../services/note.service.js';


export function NoteIndex() {
    const [notes, setNotes] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query()
            .then(setNotes)

    }

    function onSaveNote(NoteToAdd) {
        noteService.save(NoteToAdd)
            .then((newNote) => {
                const newNotes = notes.map(note => note.id === NoteToAdd.id ? NoteToAdd : note)
                newNotes.unshift(newNote)
                setNotes(newNotes)
                showSuccessMsg('Note saved!')
            })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not saved note')
            })
    }

    function onRemoveNote(noteId) {
        // ev.stopPropagation()
        noteService.remove(noteId)
            .then(() => {
                const updatedNote = notes.filter(note => note.id !== noteId)
                setNotes(updatedNote)
                showSuccessMsg('Note removed')
            })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove note')
            })
    }

    function onUpdateNote(updatedNote) {
        noteService.save(updatedNote)
            .then(() => {
                const updatedNotes = notes.map(note => note.id === updatedNote.id ? updatedNote : note)
                setNotes(updatedNotes)
                showSuccessMsg('Note update!')
            })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not update note')
            })


    }

    function onClickNote(noteId) {
        console.log('noteId:', noteId)
        navigate(`/note/edit/${noteId}`)
    }


    console.log('notes:', notes)

    return <section className="note-index">
        <NoteFilter />
        <main className="main-note-layout">
            <NoteCreate onSaveNote={onSaveNote} />
            <div className="nested-route">
                <Outlet context={onUpdateNote} />
            </div>
            {notes && <NoteList notes={notes} onRemoveNote={onRemoveNote} onUpdateNote={onUpdateNote} onClickNote={onClickNote} />}
        </main>
        <NoteSideBar />
        <UserMsg />

    </section>

}
