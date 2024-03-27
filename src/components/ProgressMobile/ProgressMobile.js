import React, { useContext } from 'react'
import { reactContext } from '../ReactContext/ReactContext';
import css from './progressMobile.module.css'

export default function ProgressMobile() {
    const { completed, total, darkMode } = useContext(reactContext);
    const progress = total === 0 ? 0 : Math.floor((completed / total) * 100);

    return (
        <div className={`${css.progressMobile} ${darkMode ? `${css.pMobileDark}` : `${css.pMobileLight}`}`}>
            {total === completed ? (
                <h3>All items have been completed</h3>
            ) : (
                <div>
                    <h3>{`Progress: ${completed} / ${total}`}</h3>
                </div>
            )}
            {/* Render progress bar */}
            <div className={css.progressBar}>
                <div className={css.progress} style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    )
}

export { ProgressMobile };