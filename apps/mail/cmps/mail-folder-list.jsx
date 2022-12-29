
export function MailFolderList({setFilters,setIsCompose}) {
    return <section className="mail-folder-list">
        <button onClick={()=>{setIsCompose(true)}} className="clean-btn fa-solid pen" ></button>
        
        <button onClick={()=>{setFilters('inbox')}} className="clean-btn  fa-solid inbox" ></button>
        {/* <button onClick={()=>{setFilterBy()}} className="clean-btn  fa-solid fa-star" ></button> */}
        <button onClick={()=>{setFilters('starred')}} className="clean-btn fa star" ></button>
        <button onClick={()=>{setFilters('draft')}} className="clean-btn fa file" ></button>
        {/* <a className="fa plus" href=""></a> */}
        {/* <a className="fa file" href=""></a> */}

        <button onClick={()=>{setFilters('sent')}} className="clean-btn fa sent" ></button>



        </section>

}
