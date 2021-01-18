import {React,useRef} from 'react'
import {Modal,Form,Button} from 'react-bootstrap'

import {useContact} from './ContactProvider'
function NewContactModal({show,setShow}) {
    const newContactID=useRef();
    const contacts=useContact();
    function handleHide(){
        setShow(false);
    }
    function HandleSubmit(){
        if (newContactID.current.value!==""){
        contacts.addContact(newContactID.current.value)
     setShow(false);}
        }
     
    
    
    return (
        <div>
            
           <Modal show={show} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>ID</span>
                    <Form.Control type="text" ref={newContactID}></Form.Control>
                
                </Modal.Body>
                <Modal.Footer>
                    <Button type="Submit" onClick={HandleSubmit}>Add New Contact</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NewContactModal;
