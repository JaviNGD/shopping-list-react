import React from 'react'
import css from './progress.module.css'

export default function Progress({ completed, total }) {
    return (
        <div className={css.progress}>
            <h2>Progress</h2>
            <p>{`Items: ${completed} / ${total}`}</p>

        </div>
    )
}

export { Progress };