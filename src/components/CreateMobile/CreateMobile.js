import React, { useContext, useState } from 'react'
import css from './createMobile.module.css';
import { FaCartArrowDown } from "react-icons/fa";
import { Modal } from '../Modal/Modal';
import { reactContext } from '../ReactContext/ReactContext';

export default function CreateMobile() {
    const { openModal, toggleModal, addItem} = useContext(reactContext);
    const [newItem, setNewItem] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("🍞 Bread & Bakery");

    // Handle the form submission
    const onSubmit = (event) => {
        event.preventDefault();
        if (newItem === '') {
            alert('Please enter an item');
            return;
        } else {
            addItem(newItem, selectedCategory);
            setNewItem('');
            toggleModal();
        }
    }

    // close modal, clean input
    const onCancel = () => {
        toggleModal();
        setNewItem('');
    }

    // Handle the input change
    const onChange = (event) => {
        setNewItem(event.target.value);
    }

    // Handle category change
    const onCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }
    
    return (
        <div className={css.container}>
            <button onClick={toggleModal}>Create item <FaCartArrowDown /></button>

            {/* Render the modal */}
            {openModal && <Modal>
                <form className={css.formMobile} onSubmit={onSubmit}>
                    <label>Add new item</label>
                    <input 
                        type="text" 
                        placeholder='Add item...'
                        value={newItem}
                        onChange={onChange}
                    />
                    <label>Category</label>
                    <select value={selectedCategory} onChange={onCategoryChange}>
                        <option value="🍞 Bread & Bakery">🍞 Bread & Bakery</option>
                        <option value="🥞 Breakfast & Cereal">🥞 Breakfast & Cereal</option>
                        <option value="🧃 Beverages">🧃 Beverages</option>
                        <option value="🥛 Diary">🥛 Diary</option>
                        <option value="🍓 Fruits">🍓 Fruits</option>
                        <option value="🥗 Vegetables">🥗 Vegetables</option>
                        <option value="🥩 Meat & Seafood">🥩 Meat & Seafood</option>
                        <option value="🍝 Pantry">🍝 Pantry</option>
                        <option value="🥫 Canned Goods & Soups">🥫 Canned Goods & Soups</option>
                        <option value="🧂 Condiments/Spices & Bake">🧂 Condiments/Spices & Bake</option>
                        <option value="🧊 Frozen">🧊 Frozen</option>
                        <option value="🍪 Snacks">🍪 Snacks</option>
                        <option value="🏠 Household & Cleaning supplies">🏠 Household & Cleaning supplies</option>
                        <option value="🛀 Personal Care">🛀 Personal Care</option>
                        <option value="🐾 Pet Care">🐾 Pet Care</option>
                        <option value="🔨 Other">🔨 Other</option>
                    </select>
                    <div className={css.buttonsContainer}>
                        <button className={css.addBtn} type='submit'>Add</button>
                        <button className={css.closeBtn} onClick={onCancel}>Cancel</button>
                    </div>
                </form>
            </Modal>}
        </div>
    )
}

export { CreateMobile};