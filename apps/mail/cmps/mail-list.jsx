import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onRemoveMail, setIsCompose,onUpdateMail,setIsUserDetails }) {
        return <section className="mail-list">
        <table>
            <thead></thead>
            <tbody>
                {mails.map(mail => <MailPreview
                    key={mail.id}
                    mail={mail}
                    onRemoveMail={onRemoveMail}
                    setIsCompose={setIsCompose}
                    onUpdateMail={onUpdateMail}
                    setIsUserDetails={setIsUserDetails}
                />)}

            </tbody>
        </table>
    </section>

}
