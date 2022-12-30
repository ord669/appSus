const { useParams, useNavigate, NavLink } = ReactRouterDOM


export function MailFolderList({setIsCompose}) {

    const navigate = useNavigate()
    // onClick={()=>{navigate('/mail/inbox')}}
    return <section className="mail-folder-list">
        <button onClick={()=>{setIsCompose(true)}} className="clean-btn fa-solid pen btn-round compose" ><span className="mail-folder-list-pen"></span ></button>
        
        <NavLink to='/mail/inbox' className="clean-btn  fa-solid inbox btn-round " ><span className="mail-folder-list-inbox"></span></NavLink>
        {/* <button onClick={()=>{setFilterBy()}} className="clean-btn  fa-solid fa-star" ></button> */}
        {/* <button onClick={()=>{navigate('/mail/starred')}} className="clean-btn fa star" ></button> */}
        <NavLink to='/mail/draft' className="clean-btn fa file btn-round " ><span className="mail-folder-list-draft"></span></NavLink>
        {/* <a className="fa plus" href=""></a> */}
        {/* <a className="fa file" href=""></a> */}

        <NavLink to='/mail/sent' className="clean-btn fa sent btn-round " ><span className="mail-folder-list-sent"></span> </NavLink>



        </section>

}
