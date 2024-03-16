import React from 'react'
import css from './panel2.module.css'
import { List } from '../List/List';
import { Item } from '../Item/Item';
import { Search } from '../Search/Search';
import { Filter } from '../Filter/Filter';

// Define a default shopping list
const defaultList = [
    {text: 'Milk', category: 'Dairy', completed: true},
    {text: 'Eggs', category: 'Dairy', completed: false},
    {text: 'Bread', category: 'Bread & Bakery', completed: false},
    {text: 'Chicken', category: 'Meat', completed: false},
    {text: 'Beef', category: 'Meat', completed: false},
    {text: 'Apples', category: 'Fruits', completed: true},
]

export default function Panel2() {


    // Group the items by category
    const groupedItems = defaultList.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div className={css.container2}>
            <Search />
            <Filter />
            <List>
                {Object.keys(groupedItems).map((category, index) => {
                    return (
                        <div key={index}>
                            <h2>{category}</h2>
                            {groupedItems[category].map((item, index) => {
                                return (
                                    <Item 
                                        key={index} 
                                        text={item.text} 
                                        category={item.category} 
                                        completed={item.completed} 
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </List>
        </div>
    )
}

export { Panel2 };