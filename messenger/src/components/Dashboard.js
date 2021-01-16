import React from 'react'

import Sidebar from './Sidebar'

function Dashboard({id}) {
    return (
      <div >
      <div ><Sidebar ID={id} className="w-25 border-right"/></div>
     
     
      </div>
  
    )
}
export default Dashboard;