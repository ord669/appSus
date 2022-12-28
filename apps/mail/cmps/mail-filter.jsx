const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js"



export function MailFilter({onSetFilter}) {
  
  const [filterByToEdit, setFilterByToEdit] = useState(mailService.getDefaultFilter())

  useEffect(()=>{
    onSetFilter(filterByToEdit)
  },[filterByToEdit])
  

  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = (type === 'number') ? +value : value
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
}

  return <section className="mail-filter">

    <input type="text"
      name="txt"
      placeholder="Search mail"
      onChange={handleChange}
      // ref={elInputRef}
    />
    
  </section>

}
