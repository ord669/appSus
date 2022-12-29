const { useState, useEffect } = React

import { DetailsMailCompose } from "./details-mail-compose.jsx";

export function DetailsContent({mailDetails}) {
    console.log('mailDetails: ', mailDetails);
    const [reply,setReply] =useState(false)
    function onReply(){
        setReply(true)
    }
  return <section className="details-content">
    <h2>{mailDetails.subject}</h2>
    <div className="details-content-user-info">
        <div className="details-content-user-info-mail-info">
        <h3>user mail: {mailDetails.from}</h3>
        <h3>to: {mailDetails.to}</h3>
        </div>
        <p>time mail sent{mailDetails.sentAt}</p>

    </div>
        <p> mail body{mailDetails.body}</p>
        <button onClick={onReply}>reply</button>
        {reply&& <DetailsMailCompose/>}
    </section>
  
}
