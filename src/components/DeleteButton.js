import React from 'react';

const getLocalStorageData = localStorage.getItem('taskList');
const listArray = JSON.parse(getLocalStorageData);

const DeleteButton = ({ index, listArray, setTasks }) => {

    const deleteTask = () => {
      listArray.splice(index, 1);
      setTasks([...listArray]);
      localStorage.setItem('taskList', JSON.stringify(listArray));
    }
  
    return (
      <button className="deleteButton" onClick={deleteTask}>
        Delete
      </button>
    );
};

export default DeleteButton