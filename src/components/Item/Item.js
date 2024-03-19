import React from 'react'
import css from './item.module.css'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function Item({ text, category, completed, onCompleted, onEdit, onDelete }) {

    return (
        <div className={css.itemContainer}>
            <li onClick={(onCompleted)}>
                <p className={completed ? css.yes : css.no}>{text}</p>
                <span>
                    <FaEdit 
                        className={css.editBtn}
                        onClick={onEdit}
                    /> 
                    <MdDeleteForever 
                        className={css.deleteBtn}
                        onClick={onDelete}    
                    />
                </span>
            </li>
        </div>
    )
}

export { Item };