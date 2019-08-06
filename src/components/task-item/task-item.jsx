import React from "react";

const TaskItem = ({ taskTitle, taskDesc }) => {
    return (
        <div className='task-item'>
            <h3>{taskTitle}</h3>
            <p>{taskDesc}</p>
        </div>
    );
};

export default TaskItem;
