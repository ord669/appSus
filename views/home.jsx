import { Hero } from "../cmps/hero.jsx";
const { Link, NavLink, useLocation } = ReactRouterDOM

export function Home() {

    return <section className="home">
        {/* <Hero /> */}
        <div className="home-logo animate__animated animate__fadeInDownBig">

            <img src="./assets/img/Asset.png" alt="" />
        </div>

        <div className="main-home">
            <Link to="/about" className="home-img home-img-about animate__animated animate__fadeInLeftBig"> <img src="./assets/img/poem.png" alt="Two pepole holding poem" title="About" /> </Link>
            <Link to="/mail/inbox" className="home-img home-img-mail animate__animated animate__fadeInUpBig"><img src="./assets/img/gmail.png" alt="mail logo" title="Mail" /></Link>
            <Link to="/note" className="home-img home-img-note animate__animated animate__fadeInRightBig" ><img src="./assets/img/note.png" alt="note logo" title="Note" /></Link>
        </div>
    </section>
}