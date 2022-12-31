const { useNavigate } = ReactRouterDOM

export function NoteSideBar() {
    const navigate = useNavigate()

    return <section className='note-side-bar-section' >

        <div className='note-side-bar'>
            <button onClick={() => { navigate('/note/all-note') }} className="clean-btn btn-side-bar active fa-regular lightbulb" ><span className="note-side-bar-lightbulb"></span></button>
            <button onClick={() => { navigate('/note/note-txt') }} className="clean-btn btn-side-bar fa-solid a" ><span className="note-side-bar-text"></span></button>
            <button onClick={() => { navigate('/note/note-pinned') }} className="clean-btn btn-side-bar fa-solid thumbtack" ><span className="note-side-bar-thumbtack"></span></button>
            <button onClick={() => { navigate('/note/note-img') }} className="clean-btn btn-side-bar fa-solid image" ><span className="note-side-bar-image"></span></button>
            <button onClick={() => { navigate('/note/note-todos') }} className="clean-btn btn-side-bar fa-solid list" ><span className="note-side-bar-list"></span></button>
            <button onClick={() => { navigate('/note/trash') }} className="clean-btn btn-side-bar fa-solid trash" ><span className="note-side-bar-trash"></span></button>

        </div>
    </section>
}