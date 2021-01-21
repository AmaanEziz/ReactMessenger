import React from 'react'
import {useContext} from 'react'
import useSessionStorage from '../CustomHook/useSessionStorage'
 export const ConversationContext=React.createContext();

 export function useConversation(){
     return useContext(ConversationContext);
 }

export default function ConversationProvider({children}){
    const [conversationMap,setConversationMap]=new useSessionStorage('conversationMap',new Map())
    const [selectedConv,setSelectedConv]=useSessionStorage('selectedConv',[])
    function addToMap(arr){
        conversationMap.set(arr,[])
    }
    function addToConv(key,value){
        conversationMap.set(key,[...conversationMap.get(key),value])
    }

    return(
        <ConversationContext.Provider value={{conversationMap,selectedConv,setSelectedConv,addToMap,addToConv}}>
            {children}
        </ConversationContext.Provider>
    )
}
