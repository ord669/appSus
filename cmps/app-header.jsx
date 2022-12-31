const { useState, useEffect } = React
const { Link, NavLink, useLocation } = ReactRouterDOM

import { MailFilter } from "../apps/mail/cmps/mail-filter.jsx"
import { NoteFilter } from "../apps/note/cmps/note-filter.jsx"
import { Hamburger } from "./Hamburger.jsx";
// 
export function AppHeader() {

    const location = useLocation()


    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }


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
            <NavLink to="/note">Note</NavLink>
        </nav>

        {/* <button className="menu-toggle-btn">☰</button> */}
        <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger />
        </div>


        {/* isOpen={hamburgerOpen} */}
        {/* <div className="hamburger">
            <button className="clean-btn" onClick={toggleHamburger} >☰</button>
        </div> */}

    </header>
}
