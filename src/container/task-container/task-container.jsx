import React from "react";
import TaskItemContainer from "../../components/task-item-container/task-item-container";
import TaskInputContainer from "../../components/task-input-container/task-input-container";

const TaskContainer = () => {
    return (
        <div className='task-container'>
            <div className='task-inputs'>
                <TaskInputContainer />
            </div>
            <div className='task-items'>
                <TaskItemContainer />
            </div>
        </div>
    );
};

export default TaskContainer;
