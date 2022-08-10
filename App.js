import './styles.css';
import TodoItem from "./TodoItem";
import todosData from "./todosData";



function App() {

  const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className="to-do__list">
      {todoItems}

    </div>
  )
}

export default App;
