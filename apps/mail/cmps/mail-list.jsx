import { MailFilter } from "./mail-filter.jsx";
import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onRemoveMail, setIsCompose, onUpdateMail, setIsUserDetails }) {
    return <section className="mail-list">
                {mails.map(mail => <MailPreview
                    key={mail.id}
                    mail={mail}
                    onRemoveMail={onRemoveMail}
                    setIsCompose={setIsCompose}
                    onUpdateMail={onUpdateMail}
                    setIsUserDetails={setIsUserDetails}
                />)}
    </section>

}
