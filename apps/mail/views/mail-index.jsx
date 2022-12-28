const { useState, useEffect } = React


import { MailCompose } from "../cmps/mail-compose.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailFolderList } from "../cmps/mail-folder-list.jsx";
import { MailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";

export function MailIndex() {

    const [mails ,setMails] = useState(null)

    useEffect(()=>{
        loadMails()
    },[])

    function loadMails() {
        
        setMails(mailService.getMails()) 

    }

    return <section className="mail-index">
        {/* mail-header */}
        {/* mail-side-bar */}
        {/* mail-main-layout */}
        <MailFilter />
        <MailFolderList />
        <MailCompose />

        
        {mails && <MailList mails={mails} />}





    </section>
}

