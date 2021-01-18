import { useEffect, useState } from 'react'

const PREFIX = 'messenger-'

export default function useSessionStorage(key, initialValue) {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    try{
    if(sessionStorage.getItem(prefixedKey)){
      return JSON.parse(sessionStorage.getItem(prefixedKey));
    }
    else{
      return initialValue;
    }}
    catch(err){
      return initialValue;
    }
  })

  useEffect(() => {

    sessionStorage.setItem(prefixedKey,value)
  }, [value])

  return [value, setValue]
}