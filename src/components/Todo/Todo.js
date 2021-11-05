import React, { useContext } from 'react';
import {TodoContext} from "../../context/context";

function Todo() {
   const {todoItem} =useContext(TodoContext);
   console.log("line 7 in todo")
   console.log(todoItem.todo)
   return (
      <div>
         <span>
            {todoItem.todo}
         </span>
         <button>Done</button>
         <button>Delete</button>
      </div>
   )
}

export default Todo;
