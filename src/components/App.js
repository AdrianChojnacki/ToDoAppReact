import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="task">
        ToDo App
        <AddTask />
        <TaskList />
      </div>
    );
  }
}

export default App;
