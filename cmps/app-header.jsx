const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <div className="logo">

                <img src="./assets/img/logo.png" alt="a.s logo" />
            </div>
        </Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail/inbox">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
