import React from 'react'
import Login from './Login'
import ContactProvider from './ContactProvider.js'
import Dashboard from './Dashboard'
import useSessionStorage from '../CustomHook/useSessionStorage'
import ConversationProvider from './ConversationProvider'

function App() {
  const [id,setId]=useSessionStorage('ID',"");
  const dashboard=(
    <ContactProvider>
      <ConversationProvider> <Dashboard id={id}/></ConversationProvider>
      
    
    </ContactProvider>
  )
  return (
<>


     {id==="" ||  id===null? <Login onIdSubmit={setId}/> : dashboard}
    
</>
  )
}

export default App;
