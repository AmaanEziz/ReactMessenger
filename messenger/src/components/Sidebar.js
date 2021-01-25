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
      if (e.target.className=="unselected"){
      e.target.className="selected"
      
     conversations.setSelectedConv(arr)
 
      }
      else{
        e.target.className="unselected"
       conversations.setSelectedConv([]);
      }
    }
    function handleNewClick(){
       setShowModal(true)
    }
    
    function handleDeleteContact(value){

      contacts.setContactList(prev=> prev.filter(contact=>
        {return contact!=value}
      ))
    }

    function handleDeleteConversation(value){

      conversations.conversationMap.delete(value)
    }
   
    return (

<div className="w-25">
{console.log(contacts.contactList)}
<div className="border-right w-auto">

<Tabs defaultActiveKey={activeKey} onSelect={setActiveKey}>

  <Tab eventKey="Conversations" title="Conversations" >
  <div style={{height:'80vh', width:'auto',overflow:'scroll'}}>
  
  {
    
        keys.map((arr)=>(

            <div key={arr} className="unselected" onClick={(e)=>{handleConvClick(e,arr)}}>
            {arr.map((val,index)=>(
              <span>
               { (index!==arr.length-1) ? <span key={val}>{val}, </span> : <span key={val}>{val}</span>}
                
                </span>
            ))}
           <Button className="deleteButton" onClick={()=>handleDeleteConversation(arr)}>X</Button>
           </div>
           
       ))
     
      
    }

    </div>
   
  </Tab>
  <Tab eventKey="Contacts" title="Contacts">
  <div style={{height:'80vh', width:'auto'}}>
  {console.log(conversations.conversationMap)}
    {

      contacts.contactList.map(value=>(
        <>
        <div className="unselected" key={value}>{value}
        <span><Button className="deleteButton" onClick={()=>handleDeleteContact(value)}>X</Button></span>
        </div>
        </>
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
{activeKey==="Contacts" ? <NewContactModal show={showModal} setShow={setShowModal}/> : <NewConversationModal  show={showModal} setShow={setShowModal}/>}

</div>
    )
}
export default Sidebar;