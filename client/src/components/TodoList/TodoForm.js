import React, { useState } from 'react'; //React import with useState method

import './todo.css'; //CSS Stylesheet


const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");//used to update the form

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder='What needs to get done today?'
        />
        <br />
        <span>***Press enter to submit***</span>
      </form>
    </div>
  );
}

export default TodoForm;
