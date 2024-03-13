import React from 'react'
import css from './toDoList.module.css'

export default function ToDoList(props) {
    return (
        <div className={css.container}>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export { ToDoList };