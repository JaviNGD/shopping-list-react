import { useState } from "react";

function useLocalStorage (ShoppingList, initialValue) {
    const localStorageList = localStorage.getItem(ShoppingList);
    let parsedList;

    if (!localStorageList) {
        localStorage.setItem(ShoppingList, JSON.stringify(initialValue));
        parsedList = initialValue;
    } else {
        parsedList = JSON.parse(localStorageList);
    }
    
    const [items, setItems] = useState(parsedList);
    
    // Save the items to the local storage
    const saveList = (newList) => {
        localStorage.setItem(ShoppingList, JSON.stringify(newList));
        setItems(newList);
    }
    
    return [items, saveList];
}

export { useLocalStorage };