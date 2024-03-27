import React from "react";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const reactContext = React.createContext();

function AppProvider({ children }) {
    const {items, saveList, loading, error} = useLocalStorage('ShoppingList', []); // List of products
    const [searchValue, setSearch] = useState(''); // Search items
    const [itemFilterStatus, setItemFilterStatus] = useState(''); // Filter items (All, Completed, Pending)
    const [openModal, setOpenModal] = useState(false); // Modal createMobile
    const [itemModalOpen, setItemModalOpen] = useState(false); // Modal edit item 
    const [darkMode, setDarkMode] = useState(false); // DarkMode
    const [selectedFilter, setSelectedFilter] = useState(""); // Add .selected class to filter buttons

    // Count the number of completed items and the total number of items
    const completed = items.filter(item => item.completed).length;
    const total = items.length;
    
    // Filter the items based on the search value ignoring accents and case sensitivity
    const searchedItems = items.filter(item => {
        let itemStatus = itemFilterStatus === "" ? true : item.completed === itemFilterStatus;
        return removeAccents(item.text.toLowerCase()).includes(removeAccents(searchValue.toLowerCase())) && itemStatus;
    });

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

    // Toggle DarkMode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Add .selected class to filter buttons and filter items
    const handleFilterClick = (filterValue) => {
        if (total !== 0) {
            setSelectedFilter(filterValue);
            setItemFilterStatus(filterValue === "All" ? "" : filterValue === "Completed");
        }
    };

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
            editItem,
            itemFilterStatus,
            setItemFilterStatus,
            darkMode,
            toggleDarkMode,
            handleFilterClick,
            selectedFilter
        }}>
            {children}
        </reactContext.Provider>
    );
}

export { reactContext, AppProvider };