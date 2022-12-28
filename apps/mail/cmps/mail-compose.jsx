import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM


export function MailCompose({setIsCompose,setFilterBy}) {
    const [mailToEdit, setMailToEdit] = useState(mailService.getEmptyMail())
    const navigate = useNavigate()
    const { mailId } = useParams()




    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        // if(mailId)setMailToEdit((prevMail) => ({ ...prevMail, sentAt: value }))
        setMailToEdit((prevMail) => ({ ...prevMail, [field]: value }))
        console.log('value: ', value);
        console.log('field: ', field);
    }


    function onSaveMail(ev) {
        ev.preventDefault()
        const {email:from} = mailService.getLoggedinUser()
        mailToEdit['from'] = from
        mailToEdit['sentAt'] = Date.now()
        mailService.save(mailToEdit).then((mail) => {
            console.log('mail saved', mail);
            setFilterBy((prevFilter) => ({ ...prevFilter, status: 'sent' }))

            // showSuccessMsg('Mail saved!')
            setIsCompose(false)

            navigate('/mail')
        })
    }
    function onCancel(){
        setIsCompose(false)
        navigate('/mail')
    }


    return <section className="mail-compose">
        <h2>New Message</h2>
        <form  onSubmit={onSaveMail}>
            <label htmlFor="subject">Subject : </label>
            <input type="text"
                name="subject"
                id="subject"
                placeholder="Enter subject..."
                // value={carToEdit.vendor}
                onChange={handleChange}
            />

            <label htmlFor="to">To : </label>
            <input type="text"
                name="to"
                id="to"
                placeholder="Recipients..."
                // value={carToEdit.vendor}
                onChange={handleChange}
            />

            <label htmlFor="body">Body : </label>
            <textarea type="text"
                name="body"
                id="body"
                placeholder="Enter subject..."
                // value={carToEdit.vendor}
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

            <div className="mail-compose-btn">
                <button >{mailId ? 'Save' : 'Send'}</button>
                <button onClick={onCancel}>Cancel</button>
             
            </div>
        </form>
    </section>

}
