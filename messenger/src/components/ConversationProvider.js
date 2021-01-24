import React from 'react'
import {useContext,useState} from 'react'
import useSessionStorage from '../CustomHook/useSessionStorage'
 export const ConversationContext=React.createContext();

 export function useConversation(){
     return useContext(ConversationContext);
 }

export default function ConversationProvider({children}){
    const [conversationMap,setConversationMap]=new useState(new Map())
    const [selectedConv,setSelectedConv]=useSessionStorage('selectedConv',[])
    const [messageAdded,setMessageAdded]=useState(false);
    
    const [sender,setSender]=useState("isMe")
    function addToMap(arr){
        conversationMap.set(arr,[])
    }
    function addToConv(key,value){
        let prefixedValue=String(sender).concat(String(value))
        conversationMap.set(key,[...conversationMap.get(key),String(prefixedValue)])
    }
    const returnObject={
        conversationMap,selectedConv,setSelectedConv,
        addToMap,addToConv,messageAdded,
        setMessageAdded,sender,setSender
    }

    return(
        <ConversationContext.Provider value={returnObject}>
            {children}
        </ConversationContext.Provider>
    )
}
