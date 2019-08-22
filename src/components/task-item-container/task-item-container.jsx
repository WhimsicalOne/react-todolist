import React from "react";
import TaskItem from "../task-item/task-item";

const TaskItemContainer = ({ tasks }) => {
    console.log(tasks);
    return (
        <div className='task-item-container'>
            {tasks.length === 0 || tasks === null ? (
                <p>
                    You have currently no tasks, why not add one! Go on, do it!
                </p>
            ) : (
                tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        title={task.title}
                        description={task.description}
                        id={task.id}
                    />
                ))
            )}
        </div>
    );
};

export default TaskItemContainer;
