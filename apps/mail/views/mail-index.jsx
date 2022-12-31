const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM
const { Outlet, Link, NavLink } = ReactRouterDOM


import { MailCompose } from "../cmps/mail-compose.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailFolderList } from "../cmps/mail-folder-list.jsx";
import { MailList } from "../cmps/mail-list.jsx";
import { mailService } from "../services/mail.service.js";
import { eventBusService, showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js';
import { UserMsg } from "../../../cmps/user-msg.jsx";


export function MailIndex() {

    const [mails, setMails] = useState([])
    console.log('mails: ', mails);
    const [filterBy, setFilterBy] = useState()
    const [isCompose, setIsCompose] = useState(false)
    const { folder, mailId } = useParams()
    const navigate = useNavigate()
    


    useEffect(() => {
        loadMails()
    }, [filterBy])


    useEffect(() => {
        console.log('folder: ', folder);

        setFilterBy((prevFilter) => ({ ...prevFilter, status: folder }))
    }, [folder])


    function loadMails() {
        console.log('folderLoad: ', filterBy);

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

    eventBusService.on('onSetFilter', onSetFilter)




    function onUpdateMail(mailToUpdate, nav) {

        mailService.save(mailToUpdate).then((mailToUpdateWithId) => {

            const updatedMails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)

            if (updatedMails.every(mail => mail.id !== mailToUpdate.id)) updatedMails.push(mailToUpdateWithId)

            setMails(updatedMails)
            showSuccessMsg('Mail Updated')
            setIsCompose(false)
            if (nav) navigate(nav)


        })
    }



    return <section className="mail-index">



        <MailFolderList setIsCompose={setIsCompose} />

        <Outlet context={onUpdateMail} />

        {isCompose && <MailCompose setIsCompose={setIsCompose} onUpdateMail={onUpdateMail} />}

        {!mailId && mails.length && <MailList mails={mails} onRemoveMail={onRemoveMail} setIsCompose={setIsCompose} onUpdateMail={onUpdateMail} />}


        <UserMsg />


    </section>
}

