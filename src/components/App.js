import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w Wiedźmina 3",
        date: "2021-08-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "posprzątać chatę",
        date: "2021-06-15",
        important: true,
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
    ],
  };

  deleteTask = (id) => {
    console.log("d" + id);
  };

  changeTaskStatus = (id) => {
    console.log("c" + id);
  };

  render() {
    return (
      <div className="task">
        ToDo App
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
