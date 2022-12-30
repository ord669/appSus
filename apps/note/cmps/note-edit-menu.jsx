

export function NoteEditMenu({ note, onRemoveNote, onUpdateNote }) {

    function handleChange(ev) {
        let { value, name: field } = ev.target
        const newNote = { ...note, style: { ...note.style, [field]: value } }
        onUpdateNote(newNote)
    }

    function stopPropagation(ev) {
        ev.stopPropagation()
    }

    function onChangePinned(ev) {
        ev.stopPropagation()
        const newNote = { ...note }
        newNote.isPinned = !newNote.isPinned
        onUpdateNote(newNote)
    }




    return <div className="note-edit-menu">

        {!note.isPinned && <button onClick={onChangePinned} className="clean-btn fa-solid thumbtack un-pinned" ></button>}
        {note.isPinned && <button onClick={onChangePinned} className="clean-btn fa-solid thumbtack"></button>}

        <button className="btn-design btn-remove-note clean-btn fa-solid trash"
            onClick={(ev) => {
                stopPropagation(ev)
                onRemoveNote(note.id)
            }}>
        </button>

        <div>
            <button className="btn-design color-change clean-btn fa-solid palette"></button>
            <input
                onClick={stopPropagation}
                className="bgc-input"
                type="color"
                name="backgroundColor"
                id="backgroundColor"
                value={note.style.backgroundColor}
                onChange={handleChange}
            />


        </div>
        {/* <div>
            <button className="color-picker pink" onClick={() => onChangeBgc()}> </button>
            <button className="color-picker yellow"></button>
            <button className="color-picker green"></button>
            <button className="color-picker blue"></button>
        </div> */}

    </div>

}