import React, { useContext } from 'react';
import css from './panel2.module.css';
import { List } from '../List/List';
import { Item } from '../Item/Item';
import { Search } from '../Search/Search';
import { ProgressMobile } from '../ProgressMobile/ProgressMobile';
import { Loading } from '../Loading/Loading';
import { Error } from '../Error/Error';
import { Empty } from '../Empty/Empty';
import { Filter } from '../Filter/Filter';
import { reactContext } from '../ReactContext/ReactContext'; 
import { CreateMobile } from '../CreateMobile/CreateMobile';

export default function Panel2() {
    const {
        groupedItems,
        toggleCompleted,
        deleteItem,
        loading,
        error,
        items
    } = useContext(reactContext); // Use the useContext hook to consume the context
    
    return (
        <div className={css.container2}>
            <ProgressMobile />
            <Search />
            <Filter />
            <List>
                {loading && <Loading />}
                {error && <Error />}
                {items.length === 0 && !loading && !error && <Empty />}
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
                                        onDelete={() => deleteItem(item.text)}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </List>
            <CreateMobile />
            
        </div>
    );
}

export { Panel2 };