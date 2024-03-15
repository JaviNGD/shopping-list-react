import React from 'react'
import css from './item.module.css'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function Item({ text, category, completed }) {
    return (
        <div className={css.itemContainer}>
            <li>
                <p className={completed ? css.yes : css.no}>{text}</p>
                <span><FaEdit /> <MdDeleteForever /></span>
            </li>
        </div>
    )
}

export { Item };