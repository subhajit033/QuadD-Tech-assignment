import { add_icon, update_icon } from '../assets/image';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addTodo } from '../redux/slices/tasks';
import { setToast } from '../redux/slices/toastNotify';

const TaskInput = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const addTasks = () => {
    if (!message) {
      dispatch(
        setToast({ type: 'error', message: 'Empty task cannot be added' })
      );
      return;
    }
    dispatch(addTodo({ message, done: false }));
    dispatch(setToast({ type: 'success', message: 'Task added successfully' }));
  };
  return (
    <div className='to-do-body'>
      <div className='to-do-text'>
        <input
          type='text'
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Write your task'
          id='to-do-input'
        />
        <img
          onClick={addTasks}
          src={add_icon}
          alt='add-icon'
          id='add-task'
          height='55px'
        />
      </div>
    </div>
  );
};

export default TaskInput;
