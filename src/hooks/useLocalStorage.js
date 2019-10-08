import { useState } from 'react';

export const useLocalStorage = (key, initialValue) =>{

    const [ storedValue, setStoredValue ]  = useState(()=>{
        //saving the key to a variable called item.
        const item = window.localStorage.getItem(key);
        // Checking to see if thew item already exist in the local storage, if it does we parse the item else we return the initial value. WE return the initial value just because we don't want to pass undefined. 
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (newValue) => {
        setStoredValue(newValue);
        //setting new item to  local storage 
        // to set an item to local storage you need to convert it to string so we do that by passing the value inside of a json.stringify();
        window.localStorage.setItem(key, JSON.stringify(newValue));
    }
    
    return [storedValue, setValue]
}

