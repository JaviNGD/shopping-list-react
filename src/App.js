import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Panel1 } from './components/Panel1/Panel1';
import { Panel2 } from './components/Panel2/Panel2';
import { AppProvider } from './components/ReactContext/ReactContext';

function App() {
  return (
    <div className="App">
      {/* Wrap the components with the context provider */}
      <AppProvider>
        <Navbar />
        <h1>Shopping List</h1>
          <div className='Panels'>
            <Panel1 />
            <Panel2 />
          </div>
      </AppProvider>
    </div>
  );

}

export default App;
