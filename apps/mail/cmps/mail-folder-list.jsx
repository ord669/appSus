
export function MailFolderList({setFilterBy}) {
    return <section className="mail-folder-list">
        <button onClick={()=>{setFilterBy()}} className="clean-btn  fa-solid inbox" ></button>
        <button onClick={()=>{setFilterBy()}} className="clean-btn  fa-solid fa-star" ></button>
        <a className="fa star" href=""></a>
        <a className="fa plus" href=""></a>
        <a className="fa file" href=""></a>

        <a className="fa sent" href=""></a>
        <a className="fa envelope" href=""></a>

        <a className="fa envelope-open" href=""></a>
        <a className="fa-solid trash" href=""></a>

        </section>

}
