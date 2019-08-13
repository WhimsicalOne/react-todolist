import React, { Component } from "react";
import TaskItemContainer from "../../components/task-item-container/task-item-container";
import TaskInputContainer from "../../components/task-input-container/task-input-container";
import Header from "../../components/header/header";
import Notification from "../../components/notification/notification";

class TaskContainer extends Component {
    state = {
        taskList: [],
        taskAdded: false,
        hidden: false
    };
    addTask = task => {
        this.setState({
            taskList: [...this.state.taskList, task]
        });
        localStorage.setItem(
            "tasks",
            JSON.stringify([...this.state.taskList, task])
        );
    };
    removeTask = task => {
        this.setState({
            taskList: this.state.taskList.filter(_task => task !== _task.id)
        });
        let taskList = JSON.parse(localStorage.getItem("tasks"));
        let deleteFromLS = taskList.filter(_task => task !== _task.id);
        taskList = JSON.stringify(deleteFromLS);
        localStorage.setItem("tasks", taskList);
    };
    taskHasBeenAdded = condition => {
        this.setState({
            taskAdded: condition
        });
    };
    deleteTasksFromLS = task => {
        localStorage.removeItem(task);
        this.setState(
            {
                taskList: []
            },
            () => {
                localStorage.setItem(
                    "tasks",
                    JSON.stringify([...this.state.taskList])
                );
            }
        );
    };
    componentDidMount() {
        let tasks = JSON.parse(localStorage.tasks);
        if (tasks.length === 0) {
            return null;
        } else {
            this.setState({
                taskList: [...tasks]
            });
        }
    }
    render() {
        const { taskList, taskAdded } = this.state;
        return (
            <React.Fragment>
                <Header amountOfTasks={taskList.length} />
                <div className='task-container'>
                    <div className='task-inputs'>
                        <TaskInputContainer
                            addTask={this.addTask}
                            taskAdded={this.taskIsAdded}
                            taskHasBeenAdded={this.taskHasBeenAdded}
                        />
                        {taskAdded === false ? (
                            <Notification error />
                        ) : (
                            <Notification success />
                        )}
                    </div>
                    <div className='task-items'>
                        <TaskItemContainer
                            tasks={this.state.taskList}
                            removeTaskFn={this.removeTask}
                        />
                    </div>
                </div>
                <div className='buttons'>
                    <button onClick={() => this.deleteTasksFromLS("tasks")}>
                        Delete Tasks (Permanently)
                    </button>
                    <button>Sort by Date Added</button>
                </div>
            </React.Fragment>
        );
    }
}

export default TaskContainer;
