import React from "react";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const reactContext = React.createContext();

function AppProvider({ children }) {
    const {items, saveList, loading, error} = useLocalStorage('ShoppingList', []);
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
        saveList(newList);
    }

    // Delete an item 
    const deleteItem = (text) => {
        const newList = items.filter(item => item.text !== text);
        saveList(newList); 
    }



    return(
        <reactContext.Provider value={{
            items,
            saveList,
            loading,
            error,
            searchValue,
            setSearch,
            completed,
            total,
            searchedItems,
            groupedItems,
            toggleCompleted,
            deleteItem
        }}>
            {children}
        </reactContext.Provider>
    );
}

export { reactContext, AppProvider };