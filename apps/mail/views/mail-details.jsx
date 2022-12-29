const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM

import { DetailsContent } from "../cmps/details-content.jsx"
import { mailService } from "../services/mail.service.js"


export function MailDetails() {
    const { mailId } = useParams()
    const [mailDetails, setMailDetails] = useState(null)
    useEffect(() => {
        loadMail()

    }, [mailId])


    function loadMail() {
        mailService.get(mailId)
            .then(setMailDetails)
            .catch((err) => {


                navigate('/mail/inbox')
            })
    }
    return <section className="mail-details">

        {mailDetails && <DetailsContent mailDetails={mailDetails}/>}
    </section>

}
