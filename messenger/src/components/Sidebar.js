import {React,useState} from 'react'
import {Tab,Tabs,Button} from 'react-bootstrap'
import {useContact} from './ContactProvider'
import {useConversation} from './ConversationProvider'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'
import '../cssStyles/SidebarStyles.css'
function Sidebar({ID}) {

    const [activeKey,setActiveKey]=useState("Conversations")
    const [showModal,setShowModal]=useState(false);
    const contacts=useContact();
    const conversations=useConversation();
    const keys=[...conversations.conversationMap.keys()]

    function handleConvClick(e,arr){
      if (e.target.className=="list"){
       e.target.className="selected"
     conversations.setSelectedConv(arr)
 
      }
      else{
        e.target.className="list"
       conversations.setSelectedConv([]);
      }
    }
    function handleAddClick(){
       setShowModal(true)
    }
    

   
    return (

<div className="w-25">

<div className="border-right w-auto">

{console.log(conversations.conversationMap)}
<Tabs defaultActiveKey={activeKey} onSelect={setActiveKey}>

  <Tab eventKey="Conversations" title="Conversations" >
  <div style={{height:'80vh', width:'auto',overflow:'scroll'}}>
  
  {
    
        keys.map((arr)=>(

            <div key={arr} className="list" onClick={(e)=>{handleConvClick(e,arr)}}>
            {arr.map((val,index)=>(
              
                (index!==arr.length-1) ? <span key={val}>{val}, </span> : <span key={val}>{val}</span>
        
            ))}
           
           </div>
           
       ))
     
      
    }

    </div>
   
  </Tab>
  <Tab eventKey="Contacts" title="Contacts">
  <div style={{height:'80vh', width:'auto'}}>
    {

      contacts.contactList.map(value=>(
        <div className="list" key={value}>{value}</div>
      ))
    }
    
    </div>
    
  </Tab>
</Tabs>

<div className="border-right border-top" >
  Your ID: {ID}
</div>
<Button style={{padding:"0px", width:"100%"}} onClick={handleAddClick}>New {activeKey==="Conversations" ? "Conversation" : "Contact"}
</Button>
</div>
{activeKey==="Contacts" ? <NewContactModal show={showModal} setShow={setShowModal}/> : <NewConversationModal  show={showModal} setShow={setShowModal}/>}

</div>
    )
}
export default Sidebar;