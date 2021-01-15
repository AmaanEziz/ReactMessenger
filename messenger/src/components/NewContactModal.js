import {React,useRef} from 'react'
import {Modal,Form,Button} from 'react-bootstrap'

function NewContactModal({show,setShow,setIds}) {
    const newContactID=useRef();
   
    function handleHide(){
        setShow(false);
    }
    function handleSubmit(){
    if (newContactID.current.value!=""){
     setIds(prevIds=>[...prevIds,newContactID.current.value])
     setShow(false);
        }
     
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
                    <Button type="Submit" onClick={handleSubmit}>Add New Contact</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default NewContactModal
