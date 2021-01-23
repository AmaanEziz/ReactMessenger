import {React} from 'react'
import {Button} from 'react-bootstrap'
import '../cssStyles/ConversationStyles.css'
import {useConversation} from './ConversationProvider'
import ConversationProvider from './ConversationProvider'
export default function Conversations({sent}) {
    const conversation=useConversation();
    const keys=[...conversation.conversationMap.get(conversation.selectedConv).keys()]
    function handleClick(e){
        conversation.setSender(e.target.value)
    }
    return (
    <ConversationProvider>
        <div>
        

        <span style={{color:"gray",fontSize:"12px"}}>
        messages: {sent}
        <span style={{marginLeft:"2vw",backgroundColor:"red"}}>
        <Button variant="secondary" value="me" onClick={handleClick}>Me</Button>
        <Button variant="secondary" value="other" onClick={handleClick}>Other Person</Button>
        </span>
        </span>
       
     
           {
               
               keys.map(value=>(
                   <div className={conversation.conversationMap.get(conversation.selectedConv).get(value)=="me"? "meMessage" : "otherMessage"} key={value}>{value}</div>
               ))
           }
            
        </div>
        </ConversationProvider>
    )
}
