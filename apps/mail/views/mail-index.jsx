const { useState, useEffect } = React


import { storageService } from "../../../services/async-storage.service.js";
import { MailCompose } from "../cmps/mail-compose.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailFolderList } from "../cmps/mail-folder-list.jsx";
import { MailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js';
import { UserMsg } from "../../../cmps/user-msg.jsx";


export function MailIndex() {

    const [mails, setMails] = useState(null)
    const [filterBy, setFilterBy] = useState('')

    useEffect(() => {
        loadMails()
    }, [filterBy])


    function loadMails() {
        mailService.query(filterBy).then(setMails)
    }


    function onSetFilter(filterBy) {

        setFilterBy(filterBy)
    }

    function onRemoveMail(mailId) {
        // console.log('mailId: ', mailId);
        mailService.remove(mailId)
            .then(() => {
                const updatedMails = mails.filter(mail => mail.id !== mailId)
                setMails(updatedMails)
                showSuccessMsg('Mail removed')
            })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove Mail')
            })
    }


    return <section className="mail-index">

        <MailFilter onSetFilter={onSetFilter} />

        <MailFolderList />
        <MailCompose />


        {mails && <MailList mails={mails} onRemoveMail={onRemoveMail} />}

        
        <UserMsg />


    </section>
}

