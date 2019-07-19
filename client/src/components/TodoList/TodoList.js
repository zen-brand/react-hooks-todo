import React, { useState } from 'react'; //React import with useState method

import './todo.css'; //CSS Stylesheet

//Components
import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm.js';


const TodoList = (props) => {
  /*Below we set-up the initial state using a react hook.
  Notice that the state is formatted as an array.*/
  const [items, setItems] = useState([
    {
      text: "sample post 1",
      isComplete: false,
    },
    {
      text: "sample post 2",
      isComplete: true,
    },
    {
      text: "sample post 3",
      isComplete: false,
    },
  ]);

  const addTodo = text => {
    const newTodos = [...items, { text }];
    setItems(newTodos);
  };

  const completeTodo = index => {
    console.log('here')
     const newTodos = [...items];
     newTodos[index].isComplete = !newTodos[index].isComplete;
     setItems(newTodos);
   };

  return (
    <div className='container'>
      <h2>My To-Do List</h2>

      <hr />

      <div className='items'>{/*This div will hold all the todo items*/}
        {items.map((item, index) => {
          return <TodoItem
            key={index}
            index={index}
            item={item}
            completeTodo={completeTodo}
          />
        })}
      </div>

      <hr />

      <div className='form'>
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default TodoList;
