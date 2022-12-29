import { MailFilter } from "./mail-filter.jsx";
import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onRemoveMail, setIsCompose, onUpdateMail, setIsUserDetails,onSetFilter }) {
    return <section className="mail-list">
        <div className="mail-list-filter">

        <MailFilter onSetFilter={onSetFilter} />
        </div>

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
