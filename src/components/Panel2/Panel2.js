import React from 'react'
import css from './panel2.module.css'
import { List } from '../List/List';
import { Item } from '../Item/Item';
import { Search } from '../Search/Search';
import { Filter } from '../Filter/Filter';
import { useState } from 'react'

export default function Panel2({ items, setItems }) {
    const [searchValue, setSearch] = useState('');
    
    // Filter the items based on the search value ignoring accents and case sensitivity
    const searchedItems = items.filter(item =>
        removeAccents(item.text.toLowerCase()).includes(removeAccents(searchValue.toLowerCase()))
    );

    // Remove accents from a string
    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Group the items by category
    const groupedItems = searchedItems.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div className={css.container2}>
            <Search 
                searchValue={searchValue} 
                setSearch={setSearch}
            />
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