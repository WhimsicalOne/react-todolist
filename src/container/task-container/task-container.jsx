import React, { Component } from "react";
import TaskItemContainer from "../../components/task-item-container/task-item-container";
import TaskInputContainer from "../../components/task-input-container/task-input-container";
import Header from "../../components/header/header";
import Notification from "../../components/notification/notification";

class TaskContainer extends Component {
    state = {
        taskList: [],
        completed: null,
        show: false
    };
    addTask = task => {
        this.setState({
            taskList: [...this.state.taskList, task]
        });
    };
    taskIsAdded = condition => {
        this.setState({
            completed: condition,
            show: !this.state.show
        });
    };
    removeTask = task => {
        this.setState({
            taskList: this.state.taskList.filter(_task => task !== _task.id)
        });
    };
    render() {
        const { completed, taskList, show } = this.state;
        return (
            <React.Fragment>
                <Header amountOfTasks={taskList.length} />
                <div className='task-container'>
                    <div className='task-inputs'>
                        <TaskInputContainer
                            addTask={this.addTask}
                            taskAdded={this.taskIsAdded}
                        />
                        {show ? "" : <Notification notifications={completed} />}
                    </div>
                    <div className='task-items'>
                        <TaskItemContainer
                            tasks={this.state.taskList}
                            removeTaskFn={this.removeTask}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TaskContainer;
