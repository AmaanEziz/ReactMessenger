import React from 'react'
import {useState,useContext} from 'react'
import useLocalStorage from '../CustomHook/useLocalStorage'
 export const ContactContext=React.createContext();

 export function useContact(){
     return useContext(ContactContext);
 }
export default function ContactProvider({children}){
    const [contactList,setContactList]=useLocalStorage('contactList',[]);
    function addContact(value){
        setContactList(prev=>[...prev,value]);
    }
    return(
        <ContactContext.Provider value={{contactList,addContact,setContactList}}>
            {children}
        </ContactContext.Provider>
    )
}
