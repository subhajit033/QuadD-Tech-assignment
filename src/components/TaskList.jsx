import {
  edit_icon,
  delete_icon,
  unchecked_icon,
  check_icon,
} from '../assets/image';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setMarkAsDone, deleteTodo } from '../redux/slices/tasks';

const TaskList = () => {
  // const [todos, setTodos] = useState([]);

  var tasks = useSelector((store) => store.todo.todos);

  return tasks.length == 0 ? (
    <h1>No Todos</h1>
  ) : (
    <ul id='ul'>
      {tasks.map((task, i) => {
        return <TaskCard key={i} {...task} idx={i} />;
      })}
    </ul>
  );
};

const TaskCard = ({ message, done, idx }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className='to-do-item'>
        <img
          src={done ? check_icon : unchecked_icon}
          onClick={() => dispatch(setMarkAsDone(idx))}
          className='icons'
        />
        <div className='to-do-item-text'>{message}</div>
      </div>
      <div>
        <img src={edit_icon} alt='edit icon' className='icons' />
        <img
          onClick={() => dispatch(deleteTodo(idx))}
          src={delete_icon}
          alt='delete-icon'
          className='icons'
        />
      </div>
    </li>
  );
};

export default TaskList;
