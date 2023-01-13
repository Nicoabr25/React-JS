import { useState, createContext, useContext } from "react";

const DarkModeContext = createContext();
const useDarkModeContext = () => useContext(DarkModeContext)

const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode) //Negamos el valor de darkmode, si era true pasa a ser false y viceversa.
        if(!darkMode)
            document.body.classList.add("darkMode");
        else
            document.body.classList.remove("darkMode");
            
    }
    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}

        </DarkModeContext.Provider>
    )
}

export {useDarkModeContext, DarkModeProvider}