import {React,useState,useContext} from 'react'
import {Tab,Tabs,Button} from 'react-bootstrap'
import {useContact} from './ContactProvider'
import NewContactModal from './NewContactModal'
import './SidebarStyles.css'
function Sidebar({ID}) {

    const [activeKey,setActiveKey]=useState("Conversations")
    const [contactModal,setContactModal]=useState(false);
    const [conversationModal,setConversationModal]=useState(false);
    const contacts=useContact();
    const [conversations,setConversations]=useState([]);
  
    function handleNewClick(){
        activeKey==="Conversations" ? setConversationModal(true) : setContactModal(true);
    }
    

   
    return (

<div className="w-25">

<div className="border-right w-auto">

<Tabs defaultActiveKey={activeKey} onSelect={setActiveKey}>

  <Tab eventKey="Conversations" title="Conversations" >
  <div style={{height:'80vh', width:'auto'}}>
  
  {
       conversations.map(arr=>(
           <div  className="list">
           <div >
           {arr.map((val,index)=>(
              (index!=arr.length-1) ? <span>{val}, </span> : <span>{val}</span>
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
<Button style={{padding:"0px", width:"100%"}} onClick={handleNewClick}>New {activeKey==="Conversations" ? "Conversation" : "Contact"}
</Button>
</div>
<NewContactModal show={contactModal} setShow={setContactModal}/>

</div>
    )
}
export default Sidebar;