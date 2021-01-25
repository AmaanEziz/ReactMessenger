import React from 'react'
import Login from './Login'
import ContactProvider from './ContactProvider.js'
import Dashboard from './Dashboard'
import useLocalStorage from '../CustomHook/useLocalStorage'
import ConversationProvider from './ConversationProvider'
import Conversations from './Conversations'

function App() {
  const [id,setId]=useLocalStorage('ID',"");
  const dashboard=(
    <ContactProvider>
      <ConversationProvider>
      
          <Dashboard id={id}/>
          
      </ConversationProvider>
    </ContactProvider>
  )
  return (
<>


     {id==="" ||  id===null? <Login onIdSubmit={setId}/> : dashboard}
    
</>
  )
}

export default App;
