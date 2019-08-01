import React, { Component } from "react";

class TaskInputContainer extends Component {
    state = {
        title: "",
        task: ""
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
                    <input
                        className='controller-input'
                        type='text'
                        name='task'
                        id='task'
                        placeholder='Your task...'
                    />
                    <button type='submit'>Submit Task</button>
                </form>
            </div>
        );
    }
}

export default TaskInputContainer;
