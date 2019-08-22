import React, { useContext, useState } from "react";
import { TaskContext } from "../../context/taskContext";
const TaskInputContainer = () => {
    const { dispatch } = useContext(TaskContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submitTask = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_TASK",
            task: {
                title,
                description
            }
        });
        setTitle("");
        setDescription("");
    };
    return (
        <div className='task-input-container'>
            <form onSubmit={submitTask}>
                <input
                    className='controller-input'
                    type='text'
                    name='title'
                    id='title'
                    value={title}
                    placeholder='Your title..'
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    className='controller-input'
                    name='task'
                    id='task'
                    cols='30'
                    rows='10'
                    value={description}
                    placeholder='Your task..'
                    onChange={e => setDescription(e.target.value)}
                />
                <button type='submit'>Submit Task</button>
            </form>
        </div>
    );
};
export default TaskInputContainer;
