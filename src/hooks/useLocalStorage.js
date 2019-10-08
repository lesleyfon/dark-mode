import { useState } from 'react';

export const useLocalStorage = (key, initialValue) =>{
    const [ storedValue, setStoredValue ]  = useState(()=>{
        //saving the key to a variable called item.
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue
    })


}