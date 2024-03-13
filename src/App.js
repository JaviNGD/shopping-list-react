import './App.css';
import { ToDoCreate } from './components/ToDoCreate/ToDoCreate';
import { ToDoCounter } from './components/ToDoCounter/ToDoCounter';
import { ToDoSearch } from './components/ToDoSearch/ToDoSearch';
import { ToDoList } from './components/ToDoList/ToDoList';
import { ToDoItem } from './components/ToDoItem/ToDoItem';
import { ToDoEdit } from './components/ToDoEdit/ToDoEdit';
import { ToDoDelete } from './components/ToDoDelete/ToDoDelete';

function App() {
  return (
    <div className="App">
      <ToDoCreate />
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        <ToDoItem />
      </ToDoList>
      <ToDoEdit />
      <ToDoDelete />
    </div>
  );
}

export default App;
