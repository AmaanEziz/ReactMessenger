import React from 'react'
import Sidebar from './Sidebar'
import Conversations from './Conversations'

import './SidebarStyles.css'
function Dashboard({id}) {
    return (
      <>
          <Sidebar ID={id} style={{float:"left"}}/>
          <Conversations style={{float:"right"}}/>
        </>
    )
}
export default Dashboard;