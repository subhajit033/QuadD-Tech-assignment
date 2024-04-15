import { add_icon, update_icon } from "../assets/image";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const TaskInput = () => {
  const dispatch = useDispatch();
  return (
    <div className='to-do-body'>
      <div className='to-do-text'>
        <input type='text' placeholder='Write your task' id='to-do-input' />
        <img
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
