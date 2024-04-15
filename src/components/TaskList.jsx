import { delete_icon, unchecked_icon, check_icon } from '../assets/image';
import { useSelector, useDispatch } from 'react-redux';

import { setMarkAsDone, deleteTodo } from '../redux/slices/tasks';
import { setToast } from '../redux/slices/toastNotify';

const TaskList = () => {
  //used var here because it shouldn't be blocked scoped , I am using this in TaskCard component (Don't Repeat Yourself first lesson of programming)
  var tasks = useSelector((store) => store.todo.todos);

  //if no tasks then show No todos and tell them to add todos
  return tasks.length == 0 ? (
    <h1>No Todos..</h1>
  ) : (
    <ul id='ul'>
      {/* Display all the todos on the ui */}
      {tasks.map((task, i) => {
        return <TaskCard key={i} {...task} idx={i} />;
      })}
    </ul>
  );
};

const TaskCard = ({ message, done, idx }) => {

  const dispatch = useDispatch();

  //this function is used to delete a todo
  const deleteTask = (e, idx) => {
    //by "e" we will get the element which html element is clicked and apply some functionality to that

    //to get that "li" of that , which element is selected to delete and add a delete animation that that
    const item = e.parentElement.parentElement;
    
    item.classList.add('deleted-item-animation');

    setToast({ type: 'success', message: 'Task deleted successfully' });

    //I used setTimeout here to show the animation in ui, if i have not used this then the todo array will get updated immediately and returns new todos and we may missed the beautiful animation
    setTimeout(() => {
      item.classList.remove('deleted-item-animation');
      dispatch(deleteTodo(idx));
    }, 400);
  };

  return (
    <li id='deleted-animation'>
      <div className='to-do-item'>
        <img
        // if todo marked as true the show check_icon otherwise unchecked_icon
          src={done ? check_icon : unchecked_icon}
          onClick={() => dispatch(setMarkAsDone(idx))}
          className='icons'
        />
        {/* if the marked as done add a style to it */}
        <div className={`to-do-item-text ${done ? 'task-done' : ''}`}>
          {message}
        </div>
      </div>
      <div>
        <img
          onClick={(e) => deleteTask(e.target, idx)}
          src={delete_icon}
          alt='delete-icon'
          className='icons'
        />
      </div>
    </li>
  );
};

export default TaskList;
