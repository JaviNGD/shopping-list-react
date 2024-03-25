import React, { useContext, useState } from 'react'
import css from './item.module.css'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { reactContext } from '../ReactContext/ReactContext';
import { Modal } from '../Modal/Modal';

export default function Item({ text, category, completed, onCompleted, onEdit, onDelete }) {
    const { toggleItemModal, itemModalOpen, saveList, setItemOpenModal, editItem } = useContext(reactContext);
    const [editing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    const handleEdit = () => {
        setEditing(true);
        toggleItemModal(); // Abre el modal del ítem
    };

    const handleChange = (e) => {
        setEditedText(e.target.value);
    };

    const handleSave = (e) => {
        e.preventDefault();
        editItem(text, editedText); // Implementa esta función en tu ReactContext para guardar los cambios en el ítem
        setEditing(false);
        setItemOpenModal(false);
    };

    const handleCancel = () => {
        setEditing(false);
        setItemOpenModal(false);
    };

    return (
        <div className={css.itemContainer}>
            <li onClick={onCompleted}>
                <p className={completed ? css.yes : css.no}>{text}</p>
            </li>
            <span className={css.icons}>
                <FaEdit
                    className={css.editBtn}
                    onClick={handleEdit}
                />
                <MdDeleteForever
                    className={css.deleteBtn}
                    onClick={onDelete}
                />
            </span>

            {editing && (
                <Modal>
                    <form className={css.formEdit} onSubmit={handleSave}>
                        <label>Edit item</label>
                        <input
                            type="text"
                            placeholder='Edit item...'
                            value={editedText}
                            onChange={handleChange}
                        />
                        <div>
                            <button type='submit' className={css.editBtn}>Save</button>
                            <button type='button' onClick={handleCancel} className={css.closeBtn}>Cancel</button>
                        </div>
                    </form>
                </Modal>
            )}
        </div>
    )
}

export { Item };