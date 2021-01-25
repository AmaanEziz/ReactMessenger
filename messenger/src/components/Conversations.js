import {React,useState} from 'react'
import {Button} from 'react-bootstrap'
import '../cssStyles/ConversationStyles.css'
import {useConversation} from './ConversationProvider'
import ConversationProvider from './ConversationProvider'

export default function Conversations({sent}) {
    const conversation=useConversation();
   const [selectedButton,setSelectedButton]=useState("primary")
   const [unselectedButton,setUnselectedButton]=useState("secondary");
    function handleClick(e){
        conversation.setSender(e.target.value)
        let temp=selectedButton
        setSelectedButton(unselectedButton)
        setUnselectedButton(temp)
    }
    return (
    <ConversationProvider>
        <div>
        

        <div style={{color:"gray",fontSize:"12px"}}>
    
        <span style={{marginLeft:"2vw",backgroundColor:"red"}}>
        <Button variant={selectedButton} value="isMe" onClick={handleClick}>Me</Button>
        <Button variant={unselectedButton} value="noMe" onClick={handleClick}>Other Person</Button>
        </span>
  
        </div>
       
        <div>
           {
               
               conversation.conversationMap.get(conversation.selectedConv).map(value=>(
          
                   <div className={(value.startsWith("isMe"))==true ?
                   "isMe" : "noMe"}>{String(value).slice(4,value.length)}</div>
                   
               )) 
           }
        </div>
        </div>
        </ConversationProvider>
    )
}
