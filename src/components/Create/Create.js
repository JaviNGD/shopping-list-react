import React, { useContext, useState } from 'react'
import css from './create.module.css'
import { FaCartArrowDown } from 'react-icons/fa';
import { reactContext } from '../ReactContext/ReactContext';

export default function Create() {
    const { addItem, darkMode } = useContext(reactContext);
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
        }
    }

    // Handle the input change
    const onChange = (event) => {
        setNewItem(event.target.value);
    }

    const onCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }

    return (
        <div className={`${css.create} ${darkMode ? `${css.createDark}` : `${css.createLight}`}`}>
            <form onSubmit={onSubmit}>
                <h2>Add new item</h2>
                <input 
                    type="text" 
                    placeholder='Add item...'
                    value={newItem}
                    onChange={onChange}
                />
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
                <button type='submit'>Create item <FaCartArrowDown /></button>
            </form>
        </div>
    )
}

export { Create };