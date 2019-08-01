import React from "react";
import Header from "../../components/header/header";
import TaskItemContainer from "../../components/task-item-container/task-item-container";
import TaskInputContainer from "../../components/task-input-container/task-input-container";

const TaskContainer = () => {
    return (
        <div className='task-container'>
            <Header />
            <TaskInputContainer />
            <TaskItemContainer />
        </div>
    );
};

export default TaskContainer;
