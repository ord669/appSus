// const { useState, useEffect } = React

import { eventBusService } from "../../../services/event-bus.service.js"

// import { mailService } from "../services/mail.service.js"



export function MailFilter() {
  
  // const [filterByToEdit, setFilterByToEdit] = useState(mailService.getDefaultFilter())
  // const [isReadFilter,setIsReadFilter] = useState(false)

  // useEffect(()=>{
  //   onSetFilter(filterByToEdit)
  // },[filterByToEdit])
  
  
  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = (type === 'number') ? +value : value
    
    eventBusService.emit('onSetFilter',((prevFilter) => ({ ...prevFilter, [field]: value })))
    
}

  return <section className="mail-filter">
    <span className="clean-btn fa-solid fa-magnifying-glass"></span>

    <input type="text"
      name="txt"
      placeholder="Search mail"
      onChange={handleChange}
      // ref={elInputRef}
    />
    {/* <input type="checkbox"
      name="isRead"
      placeholder="Search mail"
      onChange={handleChange}
      // ref={elInputRef}
    /> */}
    
  </section>

}
