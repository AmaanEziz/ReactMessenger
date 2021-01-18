import React from 'react'
import {useContext} from 'react'
import useSessionStorage from '../CustomHook/useSessionStorage'
 export const ConversationContext=React.createContext();

 export function useConversation(){
     return useContext(ConversationContext);
 }

export default function ConversationProvider({children}){
    const [conversationList,setConversationList]=useSessionStorage('conversationList',[]);
    
    function addConversation(value){
       setConversationList(prev=> [...prev,value]);
    }
    return(
        <ConversationContext.Provider value={{conversationList,addConversation}}>
            {children}
        </ConversationContext.Provider>
    )
}
