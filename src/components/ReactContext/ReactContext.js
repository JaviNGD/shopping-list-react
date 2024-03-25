import React from "react";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const reactContext = React.createContext();

function AppProvider({ children }) {
    const {items, saveList, loading, error} = useLocalStorage('ShoppingList', []);
    const [searchValue, setSearch] = useState('');
    const [openModal, setOpenModal] = useState(false); // Modal createMobile
    const [itemModalOpen, setItemModalOpen] = useState(false); // Modal edit item 

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

    // Toggle modal createMobile
    const toggleModal = () => {
        setOpenModal(!openModal);
    }

    // Toggle modal edit item
    const toggleItemModal = () => {
        setItemModalOpen(!itemModalOpen);
    };

    // Add item to the list
    const addItem = (text, category) => {
        const newList = [...items, { text, category, completed: false }];
        saveList(newList);
    }

    // Edit item in the list
    const editItem = (oldText, newText) => {
        const listIndex = items.findIndex(item => item.text === oldText);
        const newList = [...items];
        newList[listIndex].text = newText;
        saveList(newList);
    }

    // Return the provider with the context value
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
            deleteItem,
            openModal,
            setOpenModal,
            toggleModal, 
            setItemModalOpen,
            toggleItemModal,
            addItem, 
            editItem
        }}>
            {children}
        </reactContext.Provider>
    );
}

export { reactContext, AppProvider };