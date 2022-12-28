import { MailPreview } from "./mail-preview.jsx";

export function MailList({mails}) {
    

    return <section className="mail-list">
        <table>
            <thead></thead>
            <tbody>
            {mails.map(mail => <MailPreview key={mail.id} mail={mail} />)}

            </tbody>
        </table>
        </section>

}
