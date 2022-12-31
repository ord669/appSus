import { eventBusService } from "../../../services/event-bus.service.js"

const { useState, useEffect } = React
const { useNavigate } = ReactRouterDOM


export function MailPreview({ mail, onRemoveMail, setIsCompose, onUpdateMail, setIsUserDetails }) {
  const navigate = useNavigate()
  // const [changeRead ,setChangeRead] = useState(true)



  function onChangeStarred(ev) {
    ev.stopPropagation()

    const mailToUpdate = { ...mail }
    mailToUpdate.isStarred = !mailToUpdate.isStarred
    console.log('mailToUpdate: ', mailToUpdate);
    onUpdateMail(mailToUpdate)
  }





  function onMailClicked() {
    setIsCompose(true)
    navigate(`/mail/:folder/${mail.id}`)
  }

  function onChangeRead(ev) {
    ev.stopPropagation()

    const mailToUpdate = { ...mail }
    mailToUpdate.isRead = !mailToUpdate.isRead
    onUpdateMail(mailToUpdate)
  }
  // function onChangeStar(){
  //   mail.isSrarred = !mail.isRead
  //   
  //   setChangeRead((prev)=>!prev)
  // }


  function getGoogleTime(time) {

    const dateFormat = new Date(time);
    const timeToSend = dateFormat.getDate() +
      "/" + (dateFormat.getMonth() + 1)
    // const timeToSend = dateFormat.getDate()+
    // "/"+(dateFormat.getMonth()+1)+
    // " "+dateFormat.getHours()+
    // ":"+dateFormat.getMinutes()
    return timeToSend
  }

  function onChangeArchive(ev) {
    ev.stopPropagation()
    const mailToUpdate = { ...mail }
    mailToUpdate.isArchive = !mailToUpdate.isArchive

    onUpdateMail(mailToUpdate, mailToUpdate.isArchive ? '/mail/archive' : '/mail/inbox')

  }



  return <section className="mail-preview">
    {mail.isStarred && <button onClick={onChangeStarred} className="clean-btn  fa-solid fa-star mail-preview-starred-btn " ><span className="mail-folder-list-star"></span></button>}
    {!mail.isStarred && <button onClick={onChangeStarred} className="clean-btn  fa fa-star mail-preview-starred-btn" ><span className="mail-folder-list-star-active"></span></button>}


    {/* {!mail.isRead && <td> <button onClick={onChangeStar} className="clean-btn fa star"></button></td>} */}
    <div onClick={onMailClicked} className={`mail-preview-subject ${!mail.isRead && "bold"}`}>{mail.subject}</div>
    <div onClick={onMailClicked} className={`mail-preview-body ${!mail.isRead && "bold"}`}>{mail.body}</div>

    <div className="mail-preview-buttons-time">
      <div className="mail-preview-buttons">
        <button className="clean-btn fa-solid box-archive" onClick={onChangeArchive}></button>

        <button className="clean-btn fa-solid trash" onClick={() => onRemoveMail(mail.id)}></button>
        {!mail.isRead && <button onClick={onChangeRead} className="clean-btn fa envelope"></button>}
        {mail.isRead && <button onClick={onChangeRead} className="clean-btn fa envelope-open"></button>}

      </div>
      <div className={`mail-preview-time ${!mail.isRead && "bold"}`}>{getGoogleTime(mail.sentAt)}</div>

    </div>


  </section>
}
