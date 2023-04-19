import React, { useState, useEffect } from 'react';
import ListItem from './ListItem.js';

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
    const newItem = new ListItem(inputValue);

    if (!!inputValue.trim()) {
      newListArray.push(newItem); 
      localStorage.setItem('taskList', JSON.stringify(newListArray)); 
      setListArray(newListArray);
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
    let index = newListArray.findIndex((ListItem) => ListItem.id === id);
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
    return listArray.map(ListItem => (
      <li className={`ListItem ${ListItem.done ? 'done' : ''} ${ListItem.important ? 'important' : ''}`} key={ListItem.id}>
        <span className={`itemText ${ListItem.done ? 'doneText' : ''}`}>{ListItem.value}</span>
        <button className={`importantButton ${ListItem.important ? 'notImportantButton' : ''}`} onClick={(e) => handleTaskClick(e, ListItem.id, 'markImportant')}>Important</button>
        <button className={`doneButton ${ListItem.done ? 'undoneButton' : ''}`} onClick={(e) => handleTaskClick(e, ListItem.id, 'markDone')}>Done</button>
        <button className="deleteButton" onClick={(e) => handleTaskClick(e, ListItem.id, 'deleteTask')}>Delete</button>
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
