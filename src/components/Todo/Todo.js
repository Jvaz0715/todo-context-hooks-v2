import React, { useContext } from 'react';
import {TodoContext} from "../../context/context";

function Todo() {

   const {
      todoItem: { todo, isCompleted },
      index,
      isComplete,
      deleteTodo,
   } =useContext(TodoContext);

   return (
      <div>
         <span style={{textDecoration: isCompleted && "line-through"}}>
            {todo}
         </span>
         <button onClick={() => isComplete(index)}>Done</button>
         <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
   )
}

export default Todo;
