const { useState, useEffect } = React
const { useParams, useNavigate,useLocation } = ReactRouterDOM

import { eventBusService } from "../../../services/event-bus.service.js"
import { mailService } from "../services/mail.service.js"

// import { mailService } from "../services/mail.service.js"



export function MailFilter() {

  const [isReadFilter, setIsReadFilter] = useState(true)
  const [isDate, setIsDate] = useState(true)
  // const [folder, setFolder] = useState(null)
  // const { folder, mailId } = useParams()
  const {pathname} = useLocation()

  const [filterByToEdit, setFilterByToEdit] = useState(null)
  
  
  
  useEffect(() => {
    eventBusService.emit('onSetFilter', filterByToEdit)

  }, [filterByToEdit])

//   useEffect(() => {
    
//     setFilterByToEdit((prevFilter) => {
//       console.log('prevFilter:', prevFilter)
//       return({ ...prevFilter, status: folder })})
    
// }, [folder])

  function handleChange({ target }) {
    let { value, name: field, type } = target
    console.log('value: ', value);

    value = (type === 'number') ? +value : value
    value = (value === 'true') ? true : value
    value = (value === 'false') ? false : value


    const folder = pathname.substring(pathname.indexOf("/") + 6 )

    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value ,status: folder }))
    if (field === 'isRead') setIsReadFilter((prev) => !prev)
    if (field === 'isDate') setIsDate((prev) => !prev)

  }
    


  function folderLocation(location) {
      
      if (urlParams.includes('mail')) return <MailFilter />
      if (urlParams.includes('note')) return <NoteFilter />
      // switch (urlParams) {
      //     case urlParams= '/mail/inbox':

      //     case  urlParams= '/note':
      //         return <NoteFilter  />

      // }
  }

  return <section className="mail-filter">
    <span className="clean-btn fa-solid fa-magnifying-glass"></span>

    <input type="text"
      name="txt"
      placeholder="Search mail"
      onChange={handleChange}
    />
    <div className="mail-filter-btn">
      {isReadFilter && <button onClick={handleChange}  name="isRead" value={true} className="clean-btn fa envelope"></button>}
      {!isReadFilter && <button onClick={handleChange}   name="isRead" value={false} className="clean-btn fa envelope-open"></button>}
      {isDate && <button onClick={handleChange}   name="isDate" value={false} className="clean-btn fa fa-calendar-days"></button>}
      {!isDate && <button onClick={handleChange}   name="isDate" value={true} className="clean-btn fa-solid fa-calendar"></button>}

      <button onClick={() => { setFilterByToEdit(mailService.getDefaultFilter()) }} className="clean-btn fa-solid fa-xmark"></button>

    </div>

  </section>

}
