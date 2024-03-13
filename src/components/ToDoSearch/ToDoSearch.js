import React from 'react';
import css from './toDoSearch.module.css';

export default function ToDoSearch() {
    return (
        <div className={css.search}>
            <input type="text" placeholder="Search..." />
        </div>
    )
}

export { ToDoSearch };