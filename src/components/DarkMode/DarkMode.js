import React, { useContext } from 'react';
import { FiMoon, FiSun } from "react-icons/fi";
import css from './darkMode.module.css';
import { reactContext } from '../ReactContext/ReactContext';

export default function DarkMode() {
    const { darkMode, toggleDarkMode } = useContext(reactContext);

    return (
        <div className={css.containerDarkMode}>
            <button onClick={toggleDarkMode}>
                {darkMode ? 
                <FiSun className={`icon iconInfo ${css.icon} ${css.sun}`} />
                :
                <FiMoon className={`icon iconInfo ${css.icon}`} /> }
            </button>
            

        </div>
    )
}



export { DarkMode };