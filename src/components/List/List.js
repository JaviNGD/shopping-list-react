import React from 'react'
import css from './list.module.css'

export default function List({ children }) {
    return (
        <div className={css.list}>
            <ul>
                {children}
            </ul>
        </div>
    )
}

export { List };