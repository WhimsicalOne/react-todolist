import React, { Component } from "react";

class TaskInputContainer extends Component {
    state = {
        title: "",
        task: ""
    };

    handleInputs = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    submitTask = event => {
        event.preventDefault();
        const { title, task } = this.state;
        if (task === "" || title === "") {
            console.log("Please fill in the fields");
        } else {
            console.log("OOOH, a task!");
        }
    };
    render() {
        return (
            <div className='task-input-container'>
                <form onSubmit={this.submitTask}>
                    <input
                        className='controller-input'
                        type='text'
                        name='title'
                        id='title'
                        placeholder='Your title..'
                        onChange={this.handleInputs}
                    />
                    <textarea
                        className='controller-input'
                        name='task'
                        id='task'
                        cols='30'
                        rows='10'
                        placeholder='Your task..'
                        onChange={this.handleInputs}
                    />
                    <button type='submit'>Submit Task</button>
                </form>
            </div>
        );
    }
}

export default TaskInputContainer;
