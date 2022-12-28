

export function NoteEditMenu({ note, onRemoveNote }) {

    return <div>
        <button onClick={() => onRemoveNote(note.id)}>Remove</button>




    </div>

}