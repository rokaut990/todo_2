import React, { useState, useEffect } from 'react';
import listItem from './class.js';
import {markImportant, markDone, deleteTask} from './buttons.js';

function ToDoListApp() {
  const [listArray, setListArray] = useState([]);

  useEffect(() => {
    const getLocalStorageData = localStorage.getItem('taskList');
    if (getLocalStorageData) {
      setListArray(JSON.parse(getLocalStorageData));
    }
  }, []);

  const [inputValue, setInputValue] = useState('');

  const handleNewTask = () => {
    let newListArray = [...listArray];
    const newItem = new listItem(inputValue);

    if (!!inputValue.trim()) {
      //pushing new object in array
      newListArray.push(newItem); 
      //transforming js object into a json string
      localStorage.setItem('taskList', JSON.stringify(newListArray)); 
      //calling showTask function
      setListArray(newListArray);
      //once task added leave the input field blank
      setInputValue('');
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter' && !!inputValue.trim()) {
      handleNewTask();
    }
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleTaskClick = (e, id, action) => {
    let newListArray = [...listArray];
    let index = newListArray.findIndex((listItem) => listItem.id === id);
    switch (action) {
      case 'markImportant':
        newListArray[index].important = !newListArray[index].important;
        localStorage.setItem('taskList', JSON.stringify(newListArray));
        setListArray(newListArray);
        break;
      case 'markDone':
        newListArray[index].done = !newListArray[index].done;
        localStorage.setItem('taskList', JSON.stringify(newListArray));
        setListArray(newListArray);
        break;
      case 'deleteTask':
        newListArray.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(newListArray));
        setListArray(newListArray);
        break;
      default:
        break;
    }
  };

  const renderList = () => {
    return listArray.map(listItem => (
      <li className={`listItem ${listItem.done ? 'done' : ''} ${listItem.important ? 'important' : ''}`} key={listItem.id}>
        <span className={`itemText ${listItem.done ? 'doneText' : ''}`}>{listItem.value}</span>
        <button className={`importantButton ${listItem.important ? 'notImportantButton' : ''}`} onClick={(e) => handleTaskClick(e, listItem.id, 'markImportant')}>Important</button>
        <button className={`doneButton ${listItem.done ? 'undoneButton' : ''}`} onClick={(e) => handleTaskClick(e, listItem.id, 'markDone')}>Done</button>
        <button className="deleteButton" onClick={(e) => handleTaskClick(e, listItem.id, 'deleteTask')}>Delete</button>
      </li>
    ));
  };

  return (
    <div>
      <div className="newTask">
        <textarea id="newTaskInput" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Add New Task"></textarea>
        <button onClick={handleNewTask}>Add</button>
      </div>
      <ul className="todoList">
        {renderList()}
      </ul>
    </div>
  );  
}

export default ToDoListApp;
