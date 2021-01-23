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
    const [meUser,setMeUser]=useState(true)
    const [sender,setSender]=useState("me")
    function addToMap(arr){
        conversationMap.set(arr,new Map())
    }
    function addToConv(key,value){
        conversationMap.set(key,conversationMap.get(key).set(value,sender))
    }
    const returnObject={
        conversationMap,selectedConv,setSelectedConv,
        addToMap,addToConv,meUser,setMeUser,messageAdded,
        setMessageAdded,sender,setSender
    }

    return(
        <ConversationContext.Provider value={returnObject}>
            {children}
        </ConversationContext.Provider>
    )
}
