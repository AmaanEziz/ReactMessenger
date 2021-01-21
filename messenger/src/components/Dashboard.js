import React from 'react'

import Sidebar from './Sidebar'
import MessageField from './MessageField'
import Conversations from './Conversations'
import '../cssStyles/DashboardStyles.css'
import {useConversation} from './ConversationProvider'

function Dashboard({id}) {
    const conversations=useConversation();
    const rightSide=(
    <>
   <div className="convos"><Conversations /></div>
    <div style={{height:"16h"}}><MessageField/></div>
    </>
    )
    return (
<>

<Sidebar ID={id} className="left"/>
<div className="right">
{(conversations.selectedConv.length>0) ? rightSide : <></>}
</div>

</>
  
    )
}
export default Dashboard;