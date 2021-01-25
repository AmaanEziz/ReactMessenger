import {React,useState} from 'react'
import {Modal,Form,Button} from 'react-bootstrap'
import {useConversation} from './ConversationProvider'
import {useContact} from './ContactProvider'
import useLocalStorage from '../CustomHook/useLocalStorage'
function NewContactModal({show,setShow}) {
    const contacts=useContact();
    const conversations=useConversation();
    const [selectedIds,setSelectedIds]=useLocalStorage('selectedIDs',[])

    function handleHide(){
        setShow(false);
    }
    function handleCheck(e,value){
        e.stopPropagation();
        if (!selectedIds.includes(value)){
        setSelectedIds(prevIds=>[...prevIds,value])
        }
        else{
            setSelectedIds(prevIds=>prevIds.filter(id=>{
                return id!==value}))
        }
    }

    function handleSubmit(){
        if(selectedIds.length>0){
        conversations.addToMap(selectedIds)
        setSelectedIds([])
        }
        setShow(false)

          
    }
    return (
        <div>
            
           <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Conversation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                    {
                contacts.contactList.map(value=>(
                    <Form.Check type="checkbox" label={value}  onChange={(e)=>{handleCheck(e,value)}}/>
                ))
            }
                    
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="Submit" onClick={handleSubmit}>Add New Conversation</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NewContactModal;
