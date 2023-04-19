import React from 'react';
export default {Search, AllTasks, ImportantTasks, ActiveTasks, DoneTasks};



function Search({searchTask}) {
  return (
    <input type="text" placeholder="Search tasks" onChange={(e) => searchTask(e.target.value)} />
  );
}

function AllTasks({showAllTasks}) {
  return (
    <button onClick={() => showAllTasks()}>All tasks</button>
  );
}

function ImportantTasks({showImportantTasks}) {
  return (
    <button onClick={() => showImportantTasks()}>Important tasks</button>
  );
}

function ActiveTasks({showActiveTasks}) {
  return (
    <button onClick={() => showActiveTasks()}>Active tasks</button>
  );
}

function DoneTasks({showDoneTasks}) {
  return (
    <button onClick={() => showDoneTasks()}>Done tasks</button>
  );
}
