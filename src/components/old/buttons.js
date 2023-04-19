
import React from "react";

const getLocalStorageData = localStorage.getItem('taskList');
const listArray = JSON.parse(getLocalStorageData);

const markImportant = (index) => {
  !listArray[index].important ? listArray[index].important = true : listArray[index].important = false;

  document.querySelector(`#listItem${index}`).classList.toggle('important');
  document.querySelector(`#listItem${index} .importantButton`).classList.toggle('notImportantButton');
  localStorage.setItem('taskList', JSON.stringify(listArray));
}

const markDone = (index) => {
  !listArray[index].done ? listArray[index].done = true : listArray[index].done = false;

  document.querySelector(`#listItem${index} span`).classList.toggle('doneText');
  document.querySelector(`#listItem${index} .doneButton`).classList.toggle('undoneButton');
  localStorage.setItem('taskList', JSON.stringify(listArray)); 
}


const deleteTask = (index) => {
  listArray.splice(index, 1);
  localStorage.setItem('taskList', JSON.stringify(listArray));
}


export {markImportant, markDone, deleteTask};