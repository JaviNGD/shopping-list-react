import React, { useContext } from 'react'
import css from './progress.module.css'
import { reactContext } from '../ReactContext/ReactContext';

export default function Progress() {
    const {completed, total} = useContext(reactContext);

    return (
        <div className={css.progress}>
            <h2>Progress</h2>
            <p>{`Items: ${completed} / ${total}`}</p>
            
        </div>
    )
}

export { Progress };