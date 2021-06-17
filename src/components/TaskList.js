import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} change={props.change} />
  ));

  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} delete={props.delete} change={props.change} />
  ));

  return (
    <>
      <div className="active">
        <h1>Zadania do zrobienia</h1>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do wykonania</p>}
      </div>
      <hr />
      <div className="done">
        <h2>
          Zadania zrobione <em>({doneTasks.length})</em>
        </h2>
        {done.length > 5 && (
          <span style={{ color: "red", fontSize: 14 }}>
            Wyświetlonych jest jedynie 5 ostatnich elementów.
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
