const { useState, useEffect } = React

import { eventBusService } from "../../../services/event-bus.service.js"
import { mailService } from "../services/mail.service.js"

// import { mailService } from "../services/mail.service.js"



export function MailFilter() {
  
  const [isReadFilter,setIsReadFilter] = useState(true)

  const [filterByToEdit, setFilterByToEdit] = useState(mailService.getDefaultFilter())

  useEffect(()=>{
    eventBusService.emit('onSetFilter',filterByToEdit)

  },[filterByToEdit])
  
  function handleChange({ target }) {
    let { value, name: field, type } = target
    console.log('value: ', value);

    value = (type === 'number') ? +value : value 
    value = (value ==='true' )?  true :value
    value = (value ==='false' )?  false :value
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    setIsReadFilter((prev)=>!prev)

}

// function onChangeRead(ev){
//   ev.stopPropagation()

//   const mailToUpdate = {...mail}
//   mailToUpdate.isRead = !mailToUpdate.isRead
//   // onUpdateMail(mailToUpdate)

//   // 
// }

  return <section className="mail-filter">
    <span className="clean-btn fa-solid fa-magnifying-glass"></span>

    <input type="text"
      name="txt"
      placeholder="Search mail"
      onChange={handleChange}
    />
    <div className="mail-filter-btn">
          {isReadFilter&&<button onClick={handleChange} name="isRead" value={true} className="clean-btn fa envelope"></button>}
      {!isReadFilter&&<button onClick={handleChange} name="isRead" value={false} className="clean-btn fa envelope-open"></button>}
     <button onClick={()=>{setFilterByToEdit(mailService.getDefaultFilter())}} name="isRead" value={true} className="clean-btn fa-solid fa-xmark"></button>

    </div>
    
  </section>

}
