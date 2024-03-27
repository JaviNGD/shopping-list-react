import React, { useContext } from 'react'
import css from './loading.module.css'
import { reactContext } from '../ReactContext/ReactContext';

export default function Loading() {
    const { darkMode } = useContext(reactContext);

    return (
        <div className={`${css.container} ${darkMode ? `${css.loadingDark}` : `${css.loadingLight}`}`}>
            <div className={css.loader}>
                <img src="https://i.gifer.com/XOsX.gif" alt="Loading" />
                <h1>Loading...</h1>
            </div>
        </div>
    )
}

export { Loading };