import React from 'react'
import ConversationProvider from './ConversationProvider'
import Sidebar from './Sidebar'
import MessageField from './MessageField'
import Conversations from './Conversations'
import '../cssStyles/DashboardStyles.css'
import {useConversation} from './ConversationProvider'

function Dashboard({id}) {
    const conversations=useConversation();
   
    return (
<>

<Sidebar ID={id} className="left"/>
<div className="right">
{(conversations.selectedConv.length>0) ? <MessageField/> : <></>}
</div>

</>
  
    )
}
export default Dashboard;