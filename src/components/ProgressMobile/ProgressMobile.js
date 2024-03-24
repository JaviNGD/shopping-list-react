import React, { useContext } from 'react'
import { reactContext } from '../ReactContext/ReactContext';
import css from './progressMobile.module.css'

export default function ProgressMobile() {
    const { completed, total } = useContext(reactContext);

    return (
        <div className={css.progressMobile}>
            {total === completed ? (
                <h3>All items have been completed</h3>
            ) : (
                <h3>{`Completed: ${completed} / ${total}`}</h3>
            )}
        </div>
    )
}

export { ProgressMobile };