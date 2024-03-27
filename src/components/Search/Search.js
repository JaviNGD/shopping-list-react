import React, { useContext } from 'react';
import css from './search.module.css';
import { reactContext } from '../ReactContext/ReactContext';

export default function Search() {
    const { searchValue, setSearch, handleFilterClick, selectedFilter, darkMode } = useContext(reactContext);

    return (
        <div className={`${css.containerSearch} ${darkMode ? `${css.searchDark}` : `${css.searchLight}`}`}>
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
                    className={`${css.allBtn} ${selectedFilter === "All" ? css.selected : ""}`}
                    onClick={() => handleFilterClick("All")}
                >
                    All
                </button>

                <button 
                    className={`${css.completedBtn} ${selectedFilter === "Completed" ? css.selected : ""}`}
                    onClick={() => handleFilterClick("Completed")}
                >
                    Completed
                </button>

                <button 
                    className={`${css.pendingBtn} ${selectedFilter === "Pending" ? css.selected : ""}`}
                    onClick={() => handleFilterClick("Pending")}
                >
                    Pending
                </button>
            </div>
        </div>
    )
}

export { Search };