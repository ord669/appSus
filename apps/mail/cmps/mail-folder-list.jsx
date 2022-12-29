const { useParams, useNavigate, Link } = ReactRouterDOM


export function MailFolderList({setIsCompose}) {

    const navigate = useNavigate()

    return <section className="mail-folder-list">
        <button onClick={()=>{setIsCompose(true)}} className="clean-btn fa-solid pen " ><span className="mail-folder-list-pen"></span></button>
        <button onClick={()=>{setIsCompose(true)}} className="clean-btn fa-solid box-archive" ></button>
        
        <button onClick={()=>{navigate('/mail/inbox')}} className="clean-btn  fa-solid inbox " ><span className="mail-folder-list-inbox"></span></button>
        {/* <button onClick={()=>{setFilterBy()}} className="clean-btn  fa-solid fa-star" ></button> */}
        {/* <button onClick={()=>{navigate('/mail/starred')}} className="clean-btn fa star" ></button> */}
        <button onClick={()=>{navigate('/mail/draft')}} className="clean-btn fa file " ><span className="mail-folder-list-draft"></span></button>
        {/* <a className="fa plus" href=""></a> */}
        {/* <a className="fa file" href=""></a> */}

        <button  onClick={()=>{navigate('/mail/sent')}} className="clean-btn fa sent " ><span className="mail-folder-list-sent"></span> </button>



        </section>

}
