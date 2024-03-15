import React from 'react'
import css from './panel2.module.css'
import { List } from '../List/List';
import { Item } from '../Item/Item';
import { Search } from '../Search/Search';
import { Filter } from '../Filter/Filter';

// Define a default list of to-dos
const defaultList = [
    {text: 'Milk', category: 'Dairy', completed: true},
    {text: 'Eggs', category: 'Dairy', completed: false},
    {text: 'Bread', category: 'Bread & Bakery', completed: false},
    {text: 'Chicken', category: 'Meat', completed: false},
    {text: 'Beef', category: 'Meat', completed: false},
    {text: 'Apples', category: 'Fruits', completed: true},
]

export default function Panel2() {
    return (
        <div className={css.container2}>
            <Search />
            <Filter />
            <List>
                {defaultList.map(item => (
                <Item
                    key={item.text} 
                    text={item.text}
                    category={item.category}
                    completed={item.completed}
                />
                ))}
            </List>
        </div>
    )
}

export { Panel2 };