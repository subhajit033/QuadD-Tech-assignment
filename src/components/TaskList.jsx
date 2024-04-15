import {
  edit_icon,
  delete_icon,
  unchecked_icon,
  check_icon,
} from '../assets/image';

const TaskList = () => {
  return (
    <ul id='ul'>
      <li>
        <div className='to-do-item'>
          <img src={unchecked_icon} className='icons' />
          <div className='to-do-item-text'>Hii Iam subhajit</div>
        </div>
        <div>
          <img src={edit_icon} alt='edit icon' className='icons' />
          <img src={delete_icon} className='icons' />
        </div>
      </li>
    </ul>
  );
};

export default TaskList;
