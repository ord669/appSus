

export function MenuMail({mailDetails,onUpdateMail,setMailDetails}) {

    function onChangeRead(ev){
        ev.stopPropagation()
        const mailToUpdate = {...mailDetails}
        mailToUpdate.isRead = !mailToUpdate.isRead
        onUpdateMail(mailToUpdate)
        setMailDetails(mailToUpdate)

      }

      function onChangeArchive(ev){
        ev.stopPropagation()
        const mailToUpdate = {...mailDetails}
        mailToUpdate.isArchive = !mailToUpdate.isArchive
        onUpdateMail(mailToUpdate,'/mail/archive')
        setMailDetails(mailToUpdate)

      }
    return <section className="menu-mail">
            <button className="clean-btn fa-solid arrow-left"></button>
            <button className="clean-btn fa-solid box-archive" onClick={onChangeArchive}></button>
            
            <button className="clean-btn fa-solid trash" ></button>
            {!mailDetails.isRead&& <button className="clean-btn fa envelope" onClick={onChangeRead}></button>}
            {mailDetails.isRead && <button className="clean-btn fa envelope-open" onClick={onChangeRead}></button>}

    </section>

}