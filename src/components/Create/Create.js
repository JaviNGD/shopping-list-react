import React from 'react'
import css from './create.module.css'

export default function Create() {
    return (
        <div className={css.create}>
            <h2>Add new item</h2>
            <input type="text" placeholder='Add item...'/>
            <select>
                <option>Bread & Bakery</option>
                <option>Breakfast & Cereal</option>
                <option>Beverages</option>
                <option>Diary</option>
                <option>Fruits</option>
                <option>Vegetables</option>
                <option>Meat & Seafood</option>
                <option>Pantry</option>
                <option>Canned Goods & Soups</option>
                <option>Condiments/Spices & Bake</option>
                <option>Frozen</option>
                <option>Snacks</option>
                <option>Household & Cleaning supplies</option>
                <option>Personal Care</option>
                <option>Pet Care</option>
                <option>Other</option>
            </select>
            <button>Create</button>
        </div>
    )
}

export { Create };