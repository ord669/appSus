const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { MailDetails } from "./apps/mail/views/mail-details.jsx"
import { NoteEdit } from './apps/note/cmps/note-edit.jsx'



export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />



                <Route path="/mail/:folder" element={<MailIndex />} >
                    <Route path="/mail/:folder/:mailId" element={<MailDetails />} />
                </Route>


                <Route path="/note" element={<NoteIndex />}>
                    <Route path="/note/edit/:noteId" element={<NoteEdit />} />

                </Route>
            </Routes>
        </section>
    </Router>
}
