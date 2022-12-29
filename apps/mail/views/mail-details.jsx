const { useState, useEffect } = React
const { useNavigate, useParams } = ReactRouterDOM

export function MailDetails() {
    const { mailId } = useParams()

    useEffect(() => {

        loadMail()

    }, [mailId])


    // function loadMail() {
    //     mailService.get(mailId)
    //         .then((mail) => setMailToEdit(mail))
    //         .catch((err) => {

                
    //             navigate('/mail')
    //         })
    // }
        return <section className="mail-details">
             {/* <h2>{mailToEdit.subject}</h2>
        <h3>user mail: {mailToEdit.from}</h3>
        <p>time mail sent{mailToEdit.sentAt}</p>
        <p>time mail sent{mailToEdit.body}</p>
        <button>lable</button>
        <button onClick={onReply}>reply</button> */}
        <h1>mail-details</h1>
    </section>

}
