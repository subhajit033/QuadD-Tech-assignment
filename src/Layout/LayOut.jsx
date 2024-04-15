import { useEffect } from 'react';
import { Todo_gif } from '../assets/image';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const LayOut = () => {
  const toastType = useSelector((store) => store.toast.toastType);
  useEffect(() => {
    if (toastType.type === 'success') {
      toast.success(toastType.message, {
        position: 'top-center',
        autoClose: 5000,
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
        autoClose: 5000,
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
