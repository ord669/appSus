import { MailCompose } from "../cmps/mail-compose.jsx";
import { MailDetails } from "../cmps/mail-details.jsx";
import { MailFilter } from "../cmps/mail-filter.jsx";
import { MailFolderList } from "../cmps/mail-folder-list.jsx";
import { MailList } from "../cmps/mail-list.jsx";

export function MailIndex() {
    return <section className="mail-index">
        {/* mail-header */}
        {/* mail-side-bar */}
        {/* mail-main-layout */}
        <MailFilter />
        <MailFolderList />
        <MailCompose />
        <MailList />
        <MailDetails />
        </section>
}

