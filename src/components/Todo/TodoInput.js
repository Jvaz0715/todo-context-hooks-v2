import React, { useState } from 'react';

function TodoInput() {
   const [todo, setTodo] = useState("");

   function handleTodoSubmit(e) {
      e.preventDefault();
   }
   return (
      <form onSubmit={handleTodoSubmit}>
         <input 
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
         />
         <button type="submit">Submit</button>
      </form>
   )
}

export default TodoInput;
