const { useState, useEffect, useRef } = React

import { eventBusService } from '../../../services/event-bus.service.js';
import { noteService } from '../services/note.service.js';

export function NoteFilter() {
    const [filterByToEdit, setFilterByToEdit] = useState(noteService.getDefaultFilter())

    useEffect(() => {
        // onSetFilter(filterByToEdit)
        eventBusService.emit('onSetFilter', filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field } = target
        // eventBusService.emit('onSetFilter', ((prevFilter) => ({ ...prevFilter, [field]: value })))
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    return <section className='note-filter-section' >

        <input className='note-filter-input'
            type="text"
            id="txt"
            name="txt"
            placeholder="Search"
            value={filterByToEdit.txt}
            onChange={handleChange}
        />
        <span className="clean-btn fa-solid fa-magnifying-glass btn-search"></span>

    </section >
}