import React from 'react'
import css from './search.module.css'

export default function Search() {
    return (
        <div className={css.search}>
            <input type="text" placeholder="Search..." />
            <button>Search</button>
        </div>
    )
}

export { Search };