import {React,useState,useRef} from 'react'
import {Modal,Form,Button} from 'react-bootstrap'
export default function NewConversationModal({show,setShow,ids,setConversations}) {
    const [selectedIds,setSelectedIds]=useState([]);
    const idRef=useRef();
    function handleCheck(e,value){
        e.stopPropagation();
        if (!selectedIds.includes(value)){
        setSelectedIds(prevIds=>[...prevIds,value])
        }
        else{
            setSelectedIds(prevIds=>prevIds.filter(id=>{
                return id!=value}))
        }
    }
    function handleSubmit(){
        setConversations(prev=>{return [...prev,selectedIds]})
        setSelectedIds([])
        setShow(false)
          
    }
    return (
       
        <div>
        <Modal show={show} onHide={()=>{setShow(false)}}>
            <Modal.Header closeButton >
                <Modal.Title>Create Conversation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {
                ids.map(value=>(
                    <Form.Check type="checkbox" label={value} ref={idRef} onChange={(e)=>{handleCheck(e,value)}}/>
                ))
            }
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" onClick={handleSubmit}>Create Conversation</Button>
            </Modal.Footer>
        </Modal>
        
        {console.log(selectedIds)}
        </div>
    )
}
