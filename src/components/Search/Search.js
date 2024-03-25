import React, { useContext } from 'react'
import css from './search.module.css'
import { reactContext } from '../ReactContext/ReactContext';

export default function Search() {
    const { searchValue, setSearch } = useContext(reactContext);

    return (
        <div className={css.search}>
            <input 
                type="text" 
                placeholder=" Search..." 
                value={searchValue}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button>Search</button>
        </div>
    )
}

export { Search };