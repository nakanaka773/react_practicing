import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Api() {
    const [todo,setTodo] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
          const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);

        }
      
        fetchTodos();
      }, []);

  return (
    <div>
    </div>
  )
}
