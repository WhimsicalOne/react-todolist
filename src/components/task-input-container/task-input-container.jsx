import React, { Component } from "react";

class TaskInputContainer extends Component {
    state = {
        title: "",
        task: "",
        charLimit: 150
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
            this.setState({
                title: "",
                task: ""
            });
            this.props.taskHasBeenAdded(false);
        } else {
            this.props.addTask({
                title: title,
                task: task,
                id: Math.floor(Math.random() * 1000),
                completed: false,
                dateAdded: new Date()
                    .toJSON()
                    .slice(0, 10)
                    .replace(/-/g, "/")
            });
            this.setState({
                title: "",
                task: ""
            });
            this.props.taskHasBeenAdded(true);
        }
        document.getElementById("title").value = "";
        document.getElementById("task").value = "";
    };
    maxLimit(e) {
        if (!e.target.maxLength) {
            let max = e.target.maxLength;
            if (e.target.maxLength >= max) {
                return false;
            }
        }
    }
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
                        maxLength={this.state.charLimit}
                        name='task'
                        id='task'
                        cols='30'
                        rows='10'
                        placeholder='Your task..'
                        onKeyPress={this.maxLimit}
                        onChange={this.handleInputs}
                    />
                    <button type='submit'>Submit Task</button>
                </form>
            </div>
        );
    }
}

export default TaskInputContainer;
