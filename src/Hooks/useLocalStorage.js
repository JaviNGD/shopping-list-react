import { useEffect, useState } from "react";

function useLocalStorage (ShoppingList, initialValue) {
    const [items, setItems] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        try {
            const localStorageList = localStorage.getItem(ShoppingList);
            let parsedList;

            if (!localStorageList) {
                localStorage.setItem(ShoppingList, JSON.stringify(initialValue));
                parsedList = initialValue;
        } else {
            parsedList = JSON.parse(localStorageList);
            saveList(parsedList);
        }
        setLoading(false);
        } 
        catch (error) {
            setLoading(false);
            setError(true);
        }
    }, []);
    
    // Save the items to the local storage
    const saveList = (newList) => {
        localStorage.setItem(ShoppingList, JSON.stringify(newList));
        setItems(newList);
    }
    
    return {items, saveList, loading, error};
}

export { useLocalStorage };