const { useState, useEffect, Fragment } = React
const { useNavigate } = ReactRouterDOM


export function MailPreview({ mail ,onRemoveMail,setIsCompose}) {
  const navigate = useNavigate()

  function onMailClicked(){
    setIsCompose(true)
    navigate(`/mail/${mail.id}`)
  }

  return <Fragment>
    <tr >

      <td onClick={onMailClicked}>{mail.subject}</td>
      <td onClick={onMailClicked}>{mail.body}</td>
      <td> <button onClick={() => onRemoveMail(mail.id)}>Remove</button></td>
    </tr>
  </Fragment>
}
