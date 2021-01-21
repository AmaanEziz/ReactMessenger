import {React,useEffect} from 'react'
import '../cssStyles/ConversationStyles.css'
import {useConversation} from './ConversationProvider'
import ConversationProvider from './ConversationProvider'
export default function Conversations() {
    const conversation=useConversation();
    //this isnt rendering right after a message is sent

    return (
        
        <div>
           {
               conversation.conversationMap.get(conversation.selectedConv).map(value=>(
                   <div className="message">{value}</div>
               ))
           }
            
        </div>

    )
}
