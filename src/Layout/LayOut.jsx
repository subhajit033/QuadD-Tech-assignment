import { useEffect } from 'react';
import { Todo_gif } from '../assets/image';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const LayOut = () => {
  const toastType = useSelector((store) => store.toast.toastType);

  //show toast notification on the ui , i have written this code in this way because, I don't want to write the same code again and again , otherwise I have to write this code at every place where I want to show notification

  
  useEffect(() => {
    if (toastType.type === 'success') {
      toast.success(toastType.message, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
    } else if (toastType.type === 'error') {
      toast.error(toastType.message, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
    }
  }, [toastType]);

  return (
    <div className='container'>
      <ToastContainer />
      <div className='to-do-header'>
        <h2>To-do list</h2>
        <img src={Todo_gif} alt='to-do-list' height='55px' />
      </div>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default LayOut;
