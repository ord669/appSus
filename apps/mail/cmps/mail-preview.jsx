const { useState, useEffect, Fragment } = React
const { useNavigate } = ReactRouterDOM


export function MailPreview({ mail, onRemoveMail, setIsCompose,onUpdateMail,setIsUserDetails }) {
  const navigate = useNavigate()
  // const [changeRead ,setChangeRead] = useState(true)
  function onMailClicked() {
    setIsCompose(true)
    navigate(`/mail/details/${mail.id}`)
  }

  function onChangeRead(){
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

  return <Fragment>
    <tr>
      {/* {!mail.isRead && <td> <button onClick={onChangeStar} className="clean-btn fa star"></button></td>} */}
      <td onClick={onMailClicked}>{mail.subject}</td>
      <td onClick={onMailClicked}>{mail.body}</td>

      <td> <button onClick={() => onRemoveMail(mail.id)}>Remove</button></td>
      {!mail.isRead && <td> <button onClick={onChangeRead} className="clean-btn fa envelope"></button></td>}
      {mail.isRead && <td> <button onClick={onChangeRead} className="clean-btn fa envelope-open"></button></td>}
    </tr>

  </Fragment>
}
