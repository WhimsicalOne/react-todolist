import React, { Component } from "react";

class TaskInputContainer extends Component {
    state = {
        title: "",
        task: "",
        taskArray: []
    };
    render() {
        return (
            <div className='task-input-container'>
                <form>
                    <input
                        className='controller-input'
                        type='text'
                        name='title'
                        id='title'
                        placeholder='Your title..'
                    />
                    <textarea
                        className='controller-input'
                        name='task'
                        id='task'
                        cols='30'
                        rows='10'
                        placeholder='Your task..'
                    />
                    <button type='submit'>Submit Task</button>
                </form>
            </div>
        );
    }
}

export default TaskInputContainer;
