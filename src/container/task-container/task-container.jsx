import React, { Component } from "react";
import TaskItemContainer from "../../components/task-item-container/task-item-container";
import TaskInputContainer from "../../components/task-input-container/task-input-container";

class TaskContainer extends Component {
    state = {
        taskList: []
    };
    addTask = task => {
        this.setState({ taskList: [...this.state.taskList, task] });
    };
    render() {
        return (
            <div className='task-container'>
                <div className='task-inputs'>
                    <TaskInputContainer addTask={this.addTask} />
                </div>
                <div className='task-items'>
                    <TaskItemContainer tasks={this.state.taskList} />
                </div>
            </div>
        );
    }
}

export default TaskContainer;
