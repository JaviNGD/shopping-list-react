import React from 'react'
import css from './create.module.css'

export default function Create() {
    return (
        <div className={css.create}>
            <h2>Add new item</h2>
            <input type="text" placeholder='Add item...'/>
            <select>
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
            <button>Create</button>
        </div>
    )
}

export { Create };