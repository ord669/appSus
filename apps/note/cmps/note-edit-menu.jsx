

export function NoteEditMenu({ note, onRemoveNote, onChangeBgc }) {


    function handleChange({ target }) {

        let { value, name: field } = target
        console.log('value:', value)
        // console.log('note:', note)

        note.style.backgroundColor = value

        console.log('note:', note)

        onChangeBgc(note)

    }




    return <div>
        <button className="btn-remove-note" onClick={() => onRemoveNote(note.id)}>Remove</button>


        <input className="bgc-input"
            type="color"
            name="colorText"
            id="colorText"
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