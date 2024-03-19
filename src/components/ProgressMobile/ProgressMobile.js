import React from 'react'
import css from './progressMobile.module.css'

export default function ProgressMobile({ completed, total }) {
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