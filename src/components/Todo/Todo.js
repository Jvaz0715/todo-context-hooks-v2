import React, { useContext } from 'react';
import {TodoContext} from "../../context/context";

function Todo() {

   const {
      todoItem: { id, todo, isCompleted },
      isComplete,
      deleteTodo,
   } =useContext(TodoContext);

   return (
      <div>
         <span style={{textDecoration: isCompleted && "line-through"}}>
            {todo}
         </span>
         <button onClick={() => isComplete(id)}>Done</button>
         <button onClick={() => deleteTodo(id)}>Delete</button>
      </div>
   )
}

export default Todo;
