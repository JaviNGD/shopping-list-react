import React, { useContext, useState } from 'react'
import css from './item.module.css'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { reactContext } from '../ReactContext/ReactContext';
import { Modal } from '../Modal/Modal';

export default function Item({ text, completed, onCompleted, onDelete }) {
    const { toggleItemModal, setItemOpenModal, editItem, darkMode } = useContext(reactContext);
    const [editing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    // open modal for editing
    const handleEdit = () => {
        setEditing(true);
        toggleItemModal();
    };

    // Handle the input change
    const handleChange = (e) => {
        setEditedText(e.target.value);
    };

    // Save edited item, close modal
    const handleSave = (e) => {
        e.preventDefault();
        editItem(text, editedText);
        setEditing(false);
        setItemOpenModal(false);
    };

    // Cancel editing, close modal
    const handleCancel = () => {
        setEditing(false);
        setItemOpenModal(false);
    };

    return (
        <div className={`${css.itemContainer} ${darkMode ? `${css.itemDark}` : `${css.itemLight}`}`}>
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
                            <button type='submit' className={css.editBtnModal}>Save</button>
                            <button type='button' onClick={handleCancel} className={css.closeBtnModal}>Cancel</button>
                        </div>
                    </form>
                </Modal>
            )}
        </div>
    )
}

export { Item };