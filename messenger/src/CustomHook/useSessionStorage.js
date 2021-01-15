import { useEffect, useState } from 'react'

const PREFIX = 'messenger-'

export default function useSessionStorage(key, initialValue) {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    try{
    let storedValue=JSON.parse(localStorage.getItem(prefixedKey));
    if(storedValue!==null && storedValue!=="null" && storedValue!=="undefined" && storedValue!==undefined){
      return storedValue
    }
    else{
      return initialValue;
    }}
    catch(err){
      
      return initialValue;
    }
  })

  useEffect(() => {

    localStorage.setItem(prefixedKey,value)
  }, [value])

  return [value, setValue]
}