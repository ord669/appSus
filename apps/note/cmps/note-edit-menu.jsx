

export function NoteEditMenu({ note, onRemoveNote, onUpdateNote }) {

    function handleChange(ev) {
        let { value, name: field } = ev.target
        const newNote = { ...note, style: { ...note.style, [field]: value } }
        onUpdateNote(newNote)
    }

    return <div className="note-edit-menu">
        <button className="btn-design btn-remove-note clean-btn fa-solid trash" onClick={(ev) => {
            ev.stopPropagation()
            onRemoveNote(note.id)
        }}></button>
        <div>
            {/* <img className="color-change-img" src="../../assets/img/paint-board-and-brush.png"
                alt="paint-board-and-brush" /> */}
            <button className=" btn-design color-change clean-btn fa-solid palette"></button>
            <input onClick={(ev) => {
                ev.stopPropagation()
            }} className="bgc-input"
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