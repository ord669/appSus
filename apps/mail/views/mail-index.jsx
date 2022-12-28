const { useState, useEffect } = React


import { storageService } from "../../../services/async-storage.service.js";
import { MailCompose } from "../cmps/mail-compose.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailFolderList } from "../cmps/mail-folder-list.jsx";
import { MailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";

export function MailIndex() {

    const [mails ,setMails] = useState(null)
    const [filterBy, setFilterBy] = useState('')

    useEffect(()=>{
        loadMails()
    },[filterBy])

    
    function loadMails() {
        mailService.query(filterBy).then(setMails)
    }


    function onSetFilter(filterBy) {
        console.log('filterBy: ', filterBy);
        
        setFilterBy(filterBy)
    }

    return <section className="mail-index">

        <MailFilter onSetFilter={onSetFilter} />

        <MailFolderList />
        <MailCompose />

        
        {mails && <MailList mails={mails} />}





    </section>
}

