
import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react'
export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("isDarkMode", false);
    const body = document.getElementById('root');
    
    useEffect(()=>{
    }, [darkMode])
    //ternary to check if darkMode is false or true 
    darkMode 
    ?
    body.classList.add('dark-mode')
    :
    body.classList.remove('dark-mode')
    
    return [darkMode, setDarkMode]
}