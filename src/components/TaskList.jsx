import {
  edit_icon,
  delete_icon,
  unchecked_icon,
  check_icon,
} from '../assets/image';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const TaskList = () => {
  // const [todos, setTodos] = useState([]);
  const tasks = useSelector((store) => store.todo.todos) || [];

  return tasks.length == 0 ? (
    <h1>No Todos</h1>
  ) : (
    <ul id='ul'>
      {tasks.map((task, i) => {
        return <TaskCard key={i} {...task} />;
      })}
    </ul>
  );
};

const TaskCard = ({message, done}) => {
  return (
    <li>
      <div className='to-do-item'>
        <img src={unchecked_icon} className='icons' />
        <div className='to-do-item-text'>{message}</div>
      </div>
      <div>
        <img src={edit_icon} alt='edit icon' className='icons' />
        <img src={delete_icon} className='icons' />
      </div>
    </li>
  );
};

export default TaskList;
