import {React,useState} from 'react'
import {Tab,Tabs,Button} from 'react-bootstrap'
import {useContact} from './ContactProvider'
import {useConversation} from './ConversationProvider'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'
import './SidebarStyles.css'
function Sidebar({ID}) {

    const [activeKey,setActiveKey]=useState("Conversations")
    const [showModal,setShowModal]=useState(false);
    const contacts=useContact();
    const conversations=useConversation();
   
  
    function handleClick(){
       setShowModal(true)
    }
    

   
    return (

<div className="w-25">

<div className="border-right w-auto">

<Tabs defaultActiveKey={activeKey} onSelect={setActiveKey}>

  <Tab eventKey="Conversations" title="Conversations" >
  <div style={{height:'80vh', width:'auto'}}>
  
  {
       conversations.conversationList.map(arr=>(
           <div  className="list">
           <div >
           {arr.map((val,index)=>(
              (index!==arr.length-1) ? <span>{val}, </span> : <span>{val}</span>
           ))}
          
           </div>
           </div>
           
       ))
    }
    </div>
    
  </Tab>
  <Tab eventKey="Contacts" title="Contacts">
  <div style={{height:'80vh', width:'auto'}}>
    {

      contacts.contactList.map(value=>(
        <div className="list">{value}</div>
      ))
    }
    </div>
    
  </Tab>
</Tabs>

<div className="border-right border-top" >
  Your ID: {ID}
</div>
<Button style={{padding:"0px", width:"100%"}} onClick={handleClick}>New {activeKey==="Conversations" ? "Conversation" : "Contact"}
</Button>
</div>
{activeKey==="Contacts" ? <NewContactModal show={showModal} setShow={setShowModal}/> : <NewConversationModal  show={showModal} setShow={setShowModal}/>}

</div>
    )
}
export default Sidebar;