import React from 'react'
import css from './filter.module.css'

export default function Filter() {
    return (
        <div className={css.filter}>
            <button className={css.allBtn}>All</button>
            <button className={css.completedBtn}>Completed</button>
            <button className={css.pendingBtn}>Pending</button>
        </div>
    )
}

export { Filter };