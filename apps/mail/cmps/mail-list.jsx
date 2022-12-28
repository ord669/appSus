import { MailPreview } from "./mail-preview.jsx";

export function MailList({mails, onRemoveMail}) {
    

    return <section className="mail-list">
        <table>
            <thead></thead>
            <tbody>
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} onRemoveMail={onRemoveMail}/>)}

            </tbody>
        </table>
        </section>

}
