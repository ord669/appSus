const { useState, useEffect } = React
const { useParams } = ReactRouterDOM
const { Outlet, Link, NavLink } = ReactRouterDOM


import { MailCompose } from "../cmps/mail-compose.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailFolderList } from "../cmps/mail-folder-list.jsx";
import { MailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js';
import { UserMsg } from "../../../cmps/user-msg.jsx";


export function MailIndex() {

    const [mails, setMails] = useState([])
    const [filterBy, setFilterBy] = useState()
    const [isCompose, setIsCompose] = useState(true)
    const { folder,mailId } = useParams()

    useEffect(() => {
        loadMails()
    }, [filterBy])


    useEffect(() => {
        setFilterBy((prevFilter) => ({ ...prevFilter, status: folder }))
    }, [folder])

    function loadMails() {
        mailService.query(filterBy).then(setMails)
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }
    function onRemoveMail(mailId) {
        mailService.remove(mailId)
            .then(() => {
                const updatedMails = mails.filter(mail => mail.id !== mailId)
                setMails(updatedMails)
                showSuccessMsg('Mail removed')
            })
            .catch((err) => {
                showErrorMsg('Could not remove Mail')
            })
    }


    function onUpdateMail(mailToUpdate) {
        mailService.save(mailToUpdate).then((mailToUpdateWithId) => {
            const updatedMails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)
            if (updatedMails.every(mail => mail.id !== mailToUpdate.id)) updatedMails.push(mailToUpdateWithId)
            setMails(updatedMails)
            showSuccessMsg('Mail Updated')
            setIsCompose(false)
        })
    }

    return <section className="mail-index">

        <MailFilter onSetFilter={onSetFilter} />

        <MailFolderList setIsCompose={setIsCompose} />
<div>
<Outlet />

</div>
        {isCompose && <MailCompose setIsCompose={setIsCompose} onUpdateMail={onUpdateMail} />}

        {!mailId&&mails.length && <MailList mails={mails} onRemoveMail={onRemoveMail} setIsCompose={setIsCompose} onUpdateMail={onUpdateMail} />}
        

        <UserMsg />


    </section>
}

