import React, { useContext } from 'react'
import css from './search.module.css'
import { reactContext } from '../ReactContext/ReactContext';

export default function Search() {
    const { searchValue, setSearch, total, setItemFilterStatus } = useContext(reactContext);

    return (
        <div className={css.containerSearch}>
            <div className={css.search}>
                <input 
                    type="text" 
                    placeholder=" Search..." 
                    value={searchValue}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button>Search</button>
            </div>
            <div className={css.filter}>

                <button 
                    className={css.allBtn}
                    onClick={() => total !== 0 && setItemFilterStatus("")}
                >
                    All
                </button>

                <button 
                    className={css.completedBtn}
                    onClick={() => total !== 0 && setItemFilterStatus(true)}
                >
                    Completed
                </button>

                <button 
                    className={css.pendingBtn}
                    onClick={() => total !== 0 && setItemFilterStatus(false)}
                >
                    Pending
                </button>
            </div>
        </div>
    )
}

export { Search };