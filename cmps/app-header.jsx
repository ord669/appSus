
const { Link, NavLink, useLocation } = ReactRouterDOM

import { MailFilter } from "../apps/mail/cmps/mail-filter.jsx"
import { NoteFilter } from "../apps/note/cmps/note-filter.jsx"

export function AppHeader() {

    const location = useLocation()

    function DynamicCmp({ urlParams }) {

        if (urlParams.includes('mail')) return <MailFilter />
        if (urlParams.includes('note')) return <NoteFilter />
        // switch (urlParams) {
        //     case urlParams= '/mail/inbox':

        //     case  urlParams= '/note':
        //         return <NoteFilter  />

        // }
    }

    return <header className="app-header">
        <Link to="/">
            <img className="logo" src="./assets/img/Asset.png" alt="a.s logo" />
        </Link>
        <DynamicCmp urlParams={location.pathname} />

        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail/inbox">Mail</NavLink>
            <NavLink to="/note/all-note">Note</NavLink>
        </nav>


    </header>
}
