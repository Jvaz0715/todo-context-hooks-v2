import { useState, useEffect } from 'react';
import {v4 as uuidv4} from "uuid";

import { TodoInputContext, TodoContext } from './context/context';

import TodoInput from './components/Todo/TodoInput';
import Todo from './components/Todo/Todo';

import './App.css';

// let tempTodoDataArray = [
//   {
//     id: uuidv4(),
//     todo: "learn react",
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     todo: "Deploy AWS",
//     isCompleted: false,
//   },
//   {
//     id: uuidv4(),
//     todo: "Make a wire frame",
//     isCompleted: false,
//   }
// ];

function App() {
  let initialTodoArray = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos")) 
  : [];

  const [ todoArray, setTodoArray ] = useState(initialTodoArray);

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

    setTodoArray(newAddedTodoArray);
  };

  // isDone function will go to Todo.js, the map way is fine but is outdated for larger data
  // function isComplete(id) {
  //   let newArray = todoArray.map((item) =>{
  //     if (item.id === id){
  //       item.isCompleted = !item.isCompleted;
  //     }
  //     return item;
  //   })

  //   setTodoArray(newArray);
  // };

  // // delete function will go to Todo.js
  // function deleteTodo(id) {
  //   let newArray = todoArray.filter(item => item.id !== id);

  //   setTodoArray(newArray);
  // };
  
  // a more efficient way to handle toggling complete
  function isComplete(index) {
    let newArray = [...todoArray];
    // if you just set todoArray to array, you will not see auto update
    // best to declare newArray spread the old array then set the todoArray to the new mutated newArray
    newArray[index].isCompleted = !newArray[index].isCompleted
    setTodoArray(newArray)
  };

  // function deleteTodo(index) {
  //   let newArray = [...todoArray];
  //   newArray.splice(index, 1);

  //   setTodoArray(newArray)
  // };

  // similar to spread
  function deleteTodo(index) {
    let newArray = Object.assign([], todoArray);
    newArray.splice(index, 1);

    setTodoArray(newArray)
  }

  function showTodoInput() {
    return (
      <TodoInputContext.Provider value={{ addTodo }}>
        <TodoInput />
      </TodoInputContext.Provider>
    )
    
  };

  function showTodo() {
    return todoArray.map((item, index) => {
      return (
        <TodoContext.Provider 
          key={item.id} 
          value={{ 
            todoItem: item, 
            index,
            isComplete, 
            deleteTodo,
          }}>
          <Todo />
        </TodoContext.Provider>
        
      );
    })
  };

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoArray))
  }, [todoArray])

  return (
    <div className="App">
      {showTodoInput()}
      {showTodo()}
    </div>
  );
}

export default App;
