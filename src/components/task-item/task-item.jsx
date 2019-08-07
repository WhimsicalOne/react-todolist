import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ taskTitle, taskDesc, removeTask, id }) => {
    return (
        <div className='task-item'>
            <h3>{taskTitle}</h3>
            <p>{taskDesc}</p>
<<<<<<< HEAD
            <span className='close' onClick={() => removeTask(id)}>
=======
            <span className='close' onClick={removeTask}>
>>>>>>> d19b787c5d51d5a857593a5487213bf1460f9cfb
                <FontAwesomeIcon icon={faTimes} />
            </span>
        </div>
    );
};

export default TaskItem;
