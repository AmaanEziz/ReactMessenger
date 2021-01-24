import React from 'react'
import {useState} from 'react'
import {InputGroup,Form,Button} from 'react-bootstrap'
import Conversations from './Conversations'
import {useConversation} from './ConversationProvider'

export default function MessageField() {
    const [newMessage,setNewMessage]=useState("");
    const [sent,setSent]=useState(0);
  const conversation=useConversation()
    function handleSubmit(){
        conversation.addToConv(conversation.selectedConv,newMessage)
        setSent(prev=>prev+1)
    }
  
    return (
    <>
    <div style={{height:"80vh",overflowY:"scroll"}}>
     <Conversations  sent={sent}/>
     </div>
    
     <div style={{height:"16vh"}}>
            <InputGroup style={{width:"73vw"}}>
                <Form.Control value={newMessage} onChange={(e)=>{setNewMessage(e.target.value)}} as="textarea" rows={3} style={{resize:"none"}}/>
                <Button type="submit" onClick={handleSubmit} >Send Message</Button>
            </InputGroup>
            </div>
     </>
    )
}
