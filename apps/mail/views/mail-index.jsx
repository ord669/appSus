import { MailDetails } from "../cmps/mail-details.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailList } from "../cmps/mail-list.jsx";

export function MailIndex() {
    return <section className="mail-index">
        {/* mail-header */}
        {/* mail-side-bar */}
        {/* mail-main-layout */}
        <MailFilter />
        <MailList/>
        <MailDetails />
        </section>
}

