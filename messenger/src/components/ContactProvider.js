import React from 'react'
import {useContext} from 'react'
import useSessionStorage from '../CustomHook/useSessionStorage'
 export const ContactContext=React.createContext();

 export function useContact(){
     return useContext(ContactContext);
 }
export default function ContactProvider({children}){
    const [contactList,setContactList]=useSessionStorage('contactList',[]);
    function addContact(value){
        setContactList(prev=>[...prev,value]);
    }
    return(
        <ContactContext.Provider value={{contactList,addContact}}>
            {children}
        </ContactContext.Provider>
    )
}
