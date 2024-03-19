import React from 'react'
import css from './panel2.module.css'
import { List } from '../List/List';
import { Item } from '../Item/Item';
import { Search } from '../Search/Search';
import { Filter } from '../Filter/Filter';
import { useState } from 'react'
import { ProgressMobile } from '../ProgressMobile/ProgressMobile';

export default function Panel2({ items, setItems }) {
    const [searchValue, setSearch] = useState('');

    // Count the number of completed items and the total number of items
    const completed = items.filter(item => item.completed).length;
    const total = items.length;
    
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

    // Mark an item as completed
    const toggleCompleted = (text) => {
        const listIndex = items.findIndex(item => item.text === text);
        const newList = [...items];
        newList[listIndex].completed = !newList[listIndex].completed;
        setItems(newList);
    }

    return (
        <div className={css.container2}>
            <ProgressMobile 
                completed={completed} 
                total={total}
            />
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
                                        onCompleted={() => toggleCompleted(item.text)}
                                        onEdit={() => console.log('click edit')}
                                        onDelete={() => console.log('click delete')}
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