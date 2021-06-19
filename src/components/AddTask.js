import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: "2021-06-19",
  };

  render() {
    return (
      <div className="form">
        <input type="text" placeholder="Dodaj zadanie" value={this.state.text} />
        <input type="checkbox" checked={this.state.checked} id="important" />
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input type="date" value={this.state.date} min="2021-01-01" max="2025-12-31" />
        <br />
        <button>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
