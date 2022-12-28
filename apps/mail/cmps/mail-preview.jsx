const { useState, useEffect, Fragment } = React
const { useNavigate } = ReactRouterDOM


export function MailPreview({ mail ,onRemoveMail}) {
  const navigate = useNavigate()


  return <Fragment>
    <tr >

      <td onClick={() => navigate('/mail/details')}>{mail.subject}</td>
      <td onClick={() => navigate('/mail/details')}>{mail.body}</td>
      <td> <button onClick={() => onRemoveMail(mail.id)}>Remove</button></td>
    </tr>
  </Fragment>
}
