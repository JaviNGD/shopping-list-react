import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Panel1 } from './components/Panel1/Panel1';
import { Panel2 } from './components/Panel2/Panel2';

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <h1>Shopping List</h1>
        <div className='Panels'>
          <Panel1 />
          <Panel2 />
        </div>
    </div>
  );
  
}

export default App;
