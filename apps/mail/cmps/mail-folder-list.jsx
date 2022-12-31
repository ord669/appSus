import { eventBusService } from "../../../services/event-bus.service.js"

const { useState, useEffect } = React
const { useParams, useNavigate, NavLink } = ReactRouterDOM


export function MailFolderList({ setIsCompose }) {

    const navigate = useNavigate()
    const [isStarred, setIsStarred] = useState(false)
    const { folder, mailId } = useParams()
    console.log('folder: ', folder);
    console.log('foldertest: ', (folder!=='archive'));

    useEffect(() => {
        
        eventBusService.emit('onSetFilter', ((prevFilter) => ({ ...prevFilter, isStarred: isStarred })))
    }, [isStarred])

    // onClick={()=>{navigate('/mail/inbox')}}
    return <section className="mail-folder-list">
        <button onClick={() => { setIsCompose((prev) => !prev) }} className="clean-btn fa-solid pen  btn-round-compose" ><span className="mail-folder-list-pen"></span ></button>

        <NavLink onClick={() => { setIsStarred(false) }} to='/mail/inbox' className="clean-btn  fa-solid inbox btn-round " ><span className="mail-folder-list-inbox"></span></NavLink>
        {isStarred && <button onClick={() => { setIsStarred(false) }} className="clean-btn  fa-solid fa-star btn-round " ><span className="mail-folder-list-star"></span></button>}
        {!isStarred && <button onClick={() => { setIsStarred(true) }} className="clean-btn  fa fa-star btn-round " ><span className="mail-folder-list-star-active"></span></button>}


        <NavLink onClick={() => { setIsStarred(false) }} to='/mail/draft' className="clean-btn fa file btn-round " ><span className="mail-folder-list-draft"></span></NavLink>
        {/* <a className="fa plus" href=""></a> */}
        {/* <a className="fa file" href=""></a> */}

        <NavLink onClick={() => { setIsStarred(false) }} to='/mail/sent' className="clean-btn fa sent btn-round " ><span className="mail-folder-list-sent"></span> </NavLink>


        <NavLink onClick={() => { setIsStarred(false) }} to={folder !== 'archive' &&`/mail/archive`} className="clean-btn fa-solid box-archive btn-round " ><span className="mail-folder-list-box-archive"></span> </NavLink>

    </section>

}
