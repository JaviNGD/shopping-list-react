import React from 'react'
import css from './item.module.css'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function Item({ text, category, completed }) {

    function handleEdit() {
        console.log('click edit')
    }

    function handleDelete() {
        console.log('click delete')
    }

    return (
        <div className={css.itemContainer}>
            <li>
                <p className={completed ? css.yes : css.no}>{text}</p>
                <span>
                    <FaEdit 
                        className={css.editBtn}
                        onClick={handleEdit}
                    /> 
                    <MdDeleteForever 
                        className={css.deleteBtn}
                        onClick={handleDelete}    
                    />
                </span>
            </li>
        </div>
    )
}

export { Item };