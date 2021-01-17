import React from 'react'
import {useState,useContext} from 'react'
import useSessionStorage from '../CustomHook/useSessionStorage';

 export const ContactContext=React.createContext();

 export function useContact(){
     return useContext(ContactContext);
 }
export default function ContactProvider({children}){
    const [contactList,setContactList]=useState([]);
    function addContact(value){
        setContactList(prev=>[...prev,value]);
    }
    return(
        <ContactContext.Provider value={{contactList,addContact}}>
            {children}
        </ContactContext.Provider>
    )
}
