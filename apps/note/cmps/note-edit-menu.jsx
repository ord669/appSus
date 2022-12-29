

export function NoteEditMenu({ note, onRemoveNote, onUpdateNote }) {

    function handleChange(ev) {
        ev.stopPropagation()
        let { value, name: field } = ev.target
        const newNote = { ...note, style: { ...note.style, [field]: value } }
        onUpdateNote(newNote)
    }

    return <div>
        <button className="btn-remove-note" onClick={() => onRemoveNote(note.id)}>Remove</button>
        <input className="bgc-input"
            type="color"
            name="backgroundColor"
            id="backgroundColor"
            value={note.style.backgroundColor}
            onChange={handleChange}
        />
        {/* <div>
            <button className="color-picker pink" onClick={() => onChangeBgc()}> </button>
            <button className="color-picker yellow"></button>
            <button className="color-picker green"></button>
            <button className="color-picker blue"></button>
        </div> */}

    </div>

}