const { useState, useEffect, Fragment } = React
const { useNavigate } = ReactRouterDOM


export function MailPreview({ mail, onRemoveMail, setIsCompose ,setFilters}) {
  const navigate = useNavigate()
  const [changeRead ,setChangeRead] = useState(true)
  function onMailClicked() {
    setIsCompose(true)
    navigate(`/mail/${mail.id}`)
  }
  function onChangeRead(){
    mail.isRead = !mail.isRead
    console.log('mail.isRead:',mail.isRead )
    setChangeRead((prev)=>!prev)

  }

  return <Fragment>
    <tr >

      <td onClick={onMailClicked}>{mail.subject}</td>
      <td onClick={onMailClicked}>{mail.body}</td>

      <td> <button onClick={() => onRemoveMail(mail.id)}>Remove</button></td>
      {!mail.isRead && <td> <button onClick={onChangeRead} className="fa envelope"></button></td>}
      {mail.isRead && <td> <button onClick={onChangeRead} className="fa envelope-open"></button></td>}
    </tr>

  </Fragment>
}
