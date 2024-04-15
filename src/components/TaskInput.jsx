import { add_icon } from '../assets/image';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addTodo, setTodosFromLocalStorage } from '../redux/slices/tasks';
import { setToast } from '../redux/slices/toastNotify';

const TaskInput = () => {
  //useDispath hook is used to update  the data in redux store by performing respective actions
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const tasks = useSelector((store) => store.todo.todos);


  //function is to add todo
  const addTasks = () => {
    //if message is empty then show a error that Empty task cannot be added
    if (!message) {
      dispatch(
        //notify user that empty todo is cannot be added
        setToast({ type: 'error', message: 'Empty task cannot be added' })
      );
      return;
    }

    //To add the todo in redux store
    dispatch(addTodo({ message, done: false }));
    //set the message empty after succesfully todo added
    setMessage("")
    //notify user that the todo is successfully added
    dispatch(setToast({ type: 'success', message: 'Task added successfully' }));
  };



  useEffect(() => {
    //this hook is used to get all the todos from localstorage if present , and only runs when user refreshes the website or enters into the website
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos && storedTodos.length > 0) {
      dispatch(setTodosFromLocalStorage(storedTodos));
    }
  }, []);

  // Update local storage whenever tasks change
  useEffect(() => {
    
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='to-do-body'>
      <div className='to-do-text'>
        <input
          type='text'
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Write your task'
          value={message}
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
