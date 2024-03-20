import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Panel1 } from './components/Panel1/Panel1';
import { Panel2 } from './components/Panel2/Panel2';

function App() {
  const localStorageList = localStorage.getItem('ShoppingList');
  let parsedList = [];

  if (!localStorageList) {
    localStorage.setItem('ShoppingList', JSON.stringify([]));
    parsedList = [];
  } else {
    parsedList = JSON.parse(localStorageList);
  }

  const [items, setItems] = useState(parsedList);

  return (
    <div className="App"> 
      <Navbar />
      <h1>Shopping List</h1>
        <div className='Panels'>
          <Panel1 
            items={items}
            setItems={setItems}
          />
          <Panel2 
            items={items}
            setItems={setItems}
          />
        </div>
    </div>
  );
  
}

export default App;
