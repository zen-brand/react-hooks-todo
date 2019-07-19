import React from 'react';
import './todo.css'; //CSS Stylesheet


const TodoItem = ({item, index, completeTodo}) => {
  return (
    <div className='item'>
      <p
      style={{textDecoration: item.isComplete ? "line-through" : ""}}
      onClick={() => completeTodo(index)}
      >{item.text}</p>{/*Here we render the text that gets passed down as a prop*/}
    </div>
  );
}

export default TodoItem;
