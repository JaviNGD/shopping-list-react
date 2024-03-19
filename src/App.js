import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Panel1 } from './components/Panel1/Panel1';
import { Panel2 } from './components/Panel2/Panel2';


// Define a default shopping list
const defaultList = [
  {text: 'Milk', category: 'Dairy', completed: true},
  {text: 'Eggs', category: 'Dairy', completed: false},
  {text: 'Bread', category: 'Bread & Bakery', completed: false},
  {text: 'Chicken', category: 'Meat', completed: false},
  {text: 'Beef', category: 'Meat', completed: false},
  {text: 'Apples', category: 'Fruits', completed: true}
]

function App() {
  const [items, setItems] = useState(defaultList); //useState([])

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
