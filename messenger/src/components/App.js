import React from 'react'
import Login from './Login'

import Dashboard from './Dashboard'
import useSessionStorage from '../CustomHook/useSessionStorage'

function App() {
  const [id,setId]=useSessionStorage('ID',"");

  return (
    
     id=="" || id==null? <Login onIdSubmit={setId}/> :<Dashboard id={id}/>
  )
}

export default App;
