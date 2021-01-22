import {React,useEffect} from 'react'
import '../cssStyles/ConversationStyles.css'
import {useConversation} from './ConversationProvider'
import ConversationProvider from './ConversationProvider'
export default function Conversations({sent}) {
    const conversation=useConversation();
    //this isnt rendering right after a message is sent

    return (
    <ConversationProvider>
        <div>
        <p style={{color:"gray",fontSize:"12px"}}>messages: {sent}</p>
     
           {
               
               conversation.conversationMap.get(conversation.selectedConv).map(value=>(
                   <div className="message" key={value}>{value}</div>
               ))
           }
            
        </div>
        </ConversationProvider>
    )
}
