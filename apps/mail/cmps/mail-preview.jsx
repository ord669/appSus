const { useState, useEffect, Fragment } = React
const { useNavigate } = ReactRouterDOM


export function MailPreview({ mail, onRemoveMail, setIsCompose,onUpdateMail,setIsUserDetails }) {
  const navigate = useNavigate()
  // const [changeRead ,setChangeRead] = useState(true)

  function onMailClicked() {
    setIsCompose(true)
    navigate(`/mail/:folder/${mail.id}`)
  }

  function onChangeRead(ev){
    ev.stopPropagation()

    const mailToUpdate = {...mail}
    mailToUpdate.isRead = !mailToUpdate.isRead
    onUpdateMail(mailToUpdate)

    // console.log('mail.isRead:',mail.isRead )
    // setChangeRead((prev)=>!prev)
  }
  // function onChangeStar(){
  //   mail.isSrarred = !mail.isRead
  //   console.log('mail.isRead:',mail.isRead )
  //   setChangeRead((prev)=>!prev)
  // }
  console.log('getGoogleTime(mail.sentAt): ', getGoogleTime(mail.sentAt));

function getGoogleTime(time){

  const dateFormat= new Date(time);
  const timeToSend = dateFormat.getDate()+
  "/"+(dateFormat.getMonth()+1)
  // const timeToSend = dateFormat.getDate()+
  // "/"+(dateFormat.getMonth()+1)+
  // " "+dateFormat.getHours()+
  // ":"+dateFormat.getMinutes()
  return timeToSend
  
}
  
  

  return <section className="mail-preview">
    
      {/* {!mail.isRead && <td> <button onClick={onChangeStar} className="clean-btn fa star"></button></td>} */}
      <div onClick={onMailClicked} className="mail-preview-subject">{mail.subject}</div>
      <div onClick={onMailClicked} className="mail-preview-body">{mail.body}</div>

<div className="mail-preview-buttons-time">
       <div className="mail-preview-buttons">
        <button className="clean-btn fa-solid trash" onClick={() => onRemoveMail(mail.id)}></button>
      {!mail.isRead &&  <button onClick={onChangeRead} className="clean-btn fa envelope"></button>}
      {mail.isRead &&  <button onClick={onChangeRead} className="clean-btn fa envelope-open"></button>}

        </div>  
      <div  className="mail-preview-time">{getGoogleTime(mail.sentAt)}</div>

</div>
    

  </section>
}
