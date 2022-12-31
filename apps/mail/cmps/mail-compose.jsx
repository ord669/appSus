const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"

export function MailCompose({setIsCompose,onUpdateMail}) {
    const [mailToEdit, setMailToEdit] = useState(mailService.getEmptyMail())
    const navigate = useNavigate()
    const { mailId } = useParams()

    useEffect(() => {

        if (!mailId) return
        loadMail()

    }, [mailId])


    function loadMail() {
        mailService.get(mailId)
            .then((mail) => setMailToEdit(mail))
            .catch((err) => {

                
                navigate('/mail')
            })
    }


    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        // if(mailId)setMailToEdit((prevMail) => ({ ...prevMail, sentAt: value }))
        setMailToEdit((prevMail) => ({ ...prevMail, [field]: value }))
        
        
    }


    function onSaveMail(ev) {
        ev.preventDefault()
        const newMail = mailService.createNewMail(mailToEdit)
        onUpdateMail(newMail,'/mail/sent')

    }
    
    function onCancel(){
        setIsCompose(false)
    }


    return <section className="mail-compose">
        <div className="mail-compose-headline">

        <h2>New Message</h2>
        </div>
        <div className="mail-compose-form">
            
        <form id="compose-form" onSubmit={onSaveMail}>
        <input type="text"
                name="to"
                id="to"
                placeholder="To"
                // value={mailToEdit.to}
                onChange={handleChange}
            />

            <input type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                // value={mailToEdit.subject}
                onChange={handleChange}
            />

           

            <textarea type="text"
                name="body"
                id="body"
                placeholder=""
                // value={mailToEdit.body}
                onChange={handleChange}
            />
            {/* <label htmlFor="maxSpeed">Max speed : </label>
            <input type="number"
                name="maxSpeed"
                id="maxSpeed"
                placeholder="Enter max speed..."
                value={carToEdit.maxSpeed}
                onChange={handleChange}
            /> */}

        </form>
        </div>
            <div className="mail-compose-btn">
                <button type="submit" form="compose-form"  className="clean-btn mail-compose-btn-send" >{mailId ? 'Save' : 'Send'}</button>

                <button className="clean-btn fa-solid trash" onClick={onCancel}></button>
             
            </div>
    </section>

}
