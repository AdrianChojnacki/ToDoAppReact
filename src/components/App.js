import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "pojechać na retrit",
        date: "2021-08-10",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "posprzątać chatę",
        date: "2021-06-15",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "wykorzystać urlop",
        date: "2021-06-30",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "wykorzystać urlop",
        date: "2021-06-30",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "wykorzystać urlop",
        date: "2021-06-30",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "wykorzystać urlop",
        date: "2021-06-30",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "wykorzystać urlop",
        date: "2021-06-30",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);
    tasks = tasks.filter((task) => task.id !== id);

    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
