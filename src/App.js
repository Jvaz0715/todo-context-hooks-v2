import { useState } from 'react';
import {v4 as uuidv4} from "uuid";

import { TodoInputContext, TodoContext } from './context/context';

import TodoInput from './components/Todo/TodoInput';
import Todo from './components/Todo/Todo';

import './App.css';

let tempTodoDataArray = [
  {
    id: uuidv4(),
    todo: "learn react",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    todo: "Deploy AWS",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    todo: "Make a wire frame",
    isCompleted: false,
  }
];

function App() {
  const [ todoArray, setTodoArray ] = useState(tempTodoDataArray);

  // addTodo will go to TodoInput
  function addTodo(todo) {
    let newAddedTodoArray = [
      ...todoArray,
      {
        id: uuidv4(),
        todo,
        isCompleted: false,
      },
    ];

    setTodoArray(newAddedTodoArray)
  };

  // isDone function will go to Todo.js
  function isComplete(id) {
    let newArray = todoArray.map((item) =>{
      if (item.id === id){
        item.isCompleted = !item.isCompleted;
      }
      return item;
    })

    setTodoArray(newArray);
  };

  // delete function will go to Todo.js
  function deleteTodo(id) {
    let newArray = todoArray.filter(item => item.id !== id);

    setTodoArray(newArray);
  }
  
  function showTodoInput() {
    return (
      <TodoInputContext.Provider value={{ addTodo }}>
        <TodoInput />
      </TodoInputContext.Provider>
    )
    
  };

  function showTodo() {
    return todoArray.map((item) => {
      return (
        <TodoContext.Provider 
          key={item.id} 
          value={{ 
            todoItem: item, 
            isComplete, 
            deleteTodo,
          }}>
          <Todo />
        </TodoContext.Provider>
        
      );
    })
  };

  return (
    <div className="App">
      {showTodoInput()}
      {showTodo()}
    </div>
  );
}

export default App;
