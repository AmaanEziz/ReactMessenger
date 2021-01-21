import React from 'react'
import {useState} from 'react'
import {InputGroup,Form,Button} from 'react-bootstrap'

import {useConversation} from './ConversationProvider'
export default function MessageField() {
    const [newMessage,setNewMessage]=useState("");
  const conversation=useConversation()
    function handleSubmit(){
        conversation.addToConv(conversation.selectedConv,newMessage)
        console.log(conversation.conversationMap.get(conversation.selectedConv))
    }
    return (
       
            <InputGroup style={{width:"73vw"}}>
                <Form.Control value={newMessage} onChange={(e)=>{setNewMessage(e.target.value)}} as="textarea" rows={3} style={{resize:"none"}}/>
                <Button type="submit" onClick={handleSubmit} >Send Message</Button>
            </InputGroup>
        
    )
}
