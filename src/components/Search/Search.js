import React from 'react'
import css from './search.module.css'

export default function Search({searchValue, setSearch}) {


    return (
        <div className={css.search}>
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchValue}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button>Search</button>
        </div>
    )
}

export { Search };