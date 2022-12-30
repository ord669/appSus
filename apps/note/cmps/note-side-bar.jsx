export function NoteSideBar() {


    return <section className='note-side-bar-section' >
        <div className='note-side-bar'>
            <button onClick={() => { }} className="clean-btn btn-side-bar active fa-regular lightbulb" ><span className="note-side-bar-lightbulb"></span></button>
            <button onClick={() => { }} className="clean-btn btn-side-bar fa-solid a" ><span className="note-side-bar-text"></span></button>
            <button onClick={() => { }} className="clean-btn btn-side-bar fa-solid thumbtack" ><span className="note-side-bar-thumbtack"></span></button>
            <button onClick={() => { }} className="clean-btn btn-side-bar fa-solid image" ><span className="note-side-bar-image"></span></button>
            <button onClick={() => { }} className="clean-btn btn-side-bar fa-solid list" ><span className="note-side-bar-list"></span></button>
            <button onClick={() => { }} className="clean-btn btn-side-bar fa-solid trash" ><span className="note-side-bar-trash"></span></button>

        </div>
    </section>
}