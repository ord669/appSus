

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
        <button onClick={() => onRemoveNote(note.id)}>Remove</button>
        <div className=" fa-solid palette">

            <input className="bgc-input"
                type="color"
                name="colorText"
                id="colorText"
                value={note.style.backgroundColor}
                onChange={handleChange}
            />
        </div>

    </div>

}