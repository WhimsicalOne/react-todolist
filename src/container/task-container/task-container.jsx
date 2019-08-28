import React, { useContext, useState } from "react";
import TaskItemContainer from "../../components/task-item-container/task-item-container";
import TaskInputContainer from "../../components/task-input-container/task-input-container";
import Header from "../../components/header/header";
import Notification from "../../components/notification/notification";
// import Pagination from "../../components/pagination/pagination";
import { TaskContext } from "../../context/taskContext";

const TaskContainer = () => {
    const { tasks } = useContext(TaskContext);
    const [hidden, setHidden] = useState(true);
    return (
        <React.Fragment>
            <Header amountOfTasks={tasks.length} />
            <div className='task-container'>
                <div className='task-inputs'>
                    <TaskInputContainer setHidden={setHidden} />
                    <div className='notification-section'>
                        <Notification hidden={hidden} />
                    </div>
                </div>
                <div className='task-items'>
                    <TaskItemContainer tasks={tasks} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default TaskContainer;
