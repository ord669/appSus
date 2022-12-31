import { Hero } from "../cmps/hero.jsx";
const { Link, NavLink, useLocation } = ReactRouterDOM

export function Home() {

    return <section className="home">
        {/* <Hero /> */}
        <h1>AppsSus</h1>

        <div className="main-home">
            <Link to="/about" className="home-img home-img-about "> <img src="./assets/img/poem.png" alt="Two pepole holding poem" title="About" /> </Link>
            <Link to="/mail/inbox" className="home-img home-img-mail"><img src="./assets/img/gmail.png" alt="mail logo" title="Mail" /></Link>
            <Link to="/note" className="home-img home-img-note" ><img src="./assets/img/note.png" alt="note logo" title="Note" /></Link>
        </div>
    </section>
}