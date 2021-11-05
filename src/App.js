import {useState} from 'react';
import {v4 as uuidv4} from "uuid";
import TodoInput from './components/Todo/TodoInput';
import Todo from './components/Todo/Todo';

import './App.css';

let tempTodoDataArray = [
  {
    id: uuidv4(),
    todo: "learn react",
  },
  {
    id: uuidv4(),
    todo: "Deploy AWS",
  },
  {
    id: uuidv4(),
    todo: "Make a wire frame",
  }
];

function App() {
  const [todoArray, setTodoArray] = useState(tempTodoDataArray)
  
  function showTodoInput() {
    return <TodoInput />;
  };

  function showTodo() {
    return todoArray.map((item) => {
      return <Todo key={item.id}/>;
    })
  }

  return (
    <div className="App">
      {showTodoInput()}
      {showTodo()}
    </div>
  );
}

export default App;
