import { useEffect, useState } from 'react'

const PREFIX = 'messenger-'

export default function useSessionStorage(key, initialValue) {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    let storedValue=sessionStorage.getItem(prefixedKey);
    if (storedValue){
      return JSON.parse(storedValue)
    }
    else {
      return initialValue
    }
  })

  useEffect(() => {
    
    sessionStorage.setItem(prefixedKey,JSON.stringify(value))
  }, [value])

  return [value, setValue]
}