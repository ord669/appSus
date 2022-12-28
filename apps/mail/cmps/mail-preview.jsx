const { useState, useEffect, Fragment } = React
const { useNavigate} = ReactRouterDOM


export function MailPreview({mail}) {
    const navigate = useNavigate()


    return  <Fragment>
        <tr onClick={()=>navigate('/mail/details')}>
        
        <td>{mail.subject}</td>
        <td>{mail.body}</td>
        <td></td>
          </tr>
   
    
</Fragment>
}
