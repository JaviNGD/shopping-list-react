import React from 'react'
import css from './search.module.css'
import { useState, useEffect } from 'react'

export default function Search() {
    const [searchValue, setSearch] = useState('');

    useEffect(() => {
        console.log('searchValue', searchValue)
    }, [searchValue])

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