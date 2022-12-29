
export function MailFolderList({setFilters}) {
    return <section className="mail-folder-list">
        <button onClick={()=>{setFilters('inbox')}} className="clean-btn  fa-solid inbox" ></button>
        {/* <button onClick={()=>{setFilterBy()}} className="clean-btn  fa-solid fa-star" ></button> */}
        <a className="fa star" href=""></a>
        <a className="fa plus" href=""></a>
        <a className="fa file" href=""></a>

        <button onClick={()=>{setFilters('sent')}} className="clean-btn fa sent" ></button>
        <a className="fa envelope" href=""></a>

        <a className="fa envelope-open" href=""></a>
        <a className="fa-solid trash" href=""></a>

        </section>

}
