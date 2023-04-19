import listItem from './class.js'
import {markImportant, markDone, deleteTask} from './buttons.js'


const addBtn = document.querySelector('.newTask button');
const inputBox = document.querySelector('.newTask textarea');
const textarea = document.getElementById('newTaskInput');
const todoList = document.querySelector('.todoList');

  

addBtn.addEventListener('click', addTask);
function addTask() { 
  const getLocalStorageData = localStorage.getItem('taskList');
  let listArray = getLocalStorageData ? JSON.parse(getLocalStorageData) : [];
  //getting input field value
  const userEnteredValue = inputBox.value; 
  if(!!userEnteredValue.trim()) {
    const newItem = new listItem(userEnteredValue);
    //pushing new object in array
    listArray.push(newItem); 
    //transforming js object into a json string
    localStorage.setItem('taskList', JSON.stringify(listArray)); 
     //calling showTask function
    showTasks();
    //unactive the add button once the task added
    addBtn.classList.remove('active'); 
  }
}

textarea.addEventListener('keypress', handleKeyPress);
function handleKeyPress(e) {
 var key=e.keyCode || e.which;
  if (key === 13 && !!inputBox.value.trim()) {
    addBtn.click();
  }
}

export function showTasks(e) {
  const getLocalStorageData = localStorage.getItem('taskList');
  let listArray = getLocalStorageData ? JSON.parse(getLocalStorageData) : []; 
  let idCounter = 0;
  
  // while(todoList.firstChild) {
  //   todoList.firstChild.remove();
  // }

  listArray.forEach((element, index) => {
    makeListItem(element, idCounter++);
  });
  localStorage.setItem('taskList', JSON.stringify(listArray));
   //once task added leave the input field blank
  inputBox.value = '';
  // adding styles to built items
  localStorage.getItem('taskList') ? init() : null;
}

function makeListItem(element, id) {
  const newLiTag = document.createElement('li');
  const textInElement = document.createElement('span');
  const importantButton = document.createElement('button');
  const doneButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  element.id = id;

  newLiTag.setAttribute('id', `listItem${element.id}`);
  textInElement.textContent = element.value;
  doneButton.setAttribute('type', 'button');
  importantButton.setAttribute('type', 'button');
  deleteButton.setAttribute('type', 'button');

  newLiTag.classList.add('listItem');
  textInElement.classList.add('itemText');
  importantButton.classList.add('importantButton');
  doneButton.classList.add('doneButton');
  deleteButton.classList.add('deleteButton');
  
  //todoList.insertAdjacentElement('afterbegin' , newLiTag);
  todoList.prepend(newLiTag);
  newLiTag.append(textInElement);
  newLiTag.append(importantButton);
  newLiTag.append(doneButton);
  newLiTag.append(deleteButton);

  //importantButton.addEventListener('click', () => markImportant(element.id));
  //newLiTag.addEventListener('click', (e) => markDone(element.id));
  //doneButton.addEventListener('click', (e) => markDone(element.id));
  //deleteButton.addEventListener('click', (e) => { deleteTask(element.id); showTasks()});

  todoList.addEventListener('click', (e) => { 
    if (e.target.parentNode.id == `listItem${element.id}` && e.target.classList.contains('importantButton')) { markImportant(element.id);}
    else if (e.target.parentNode.id == `listItem${element.id}` && e.target.classList.contains('doneButton')) { markDone(element.id);}
    else if (e.target.parentNode.id == `listItem${element.id}` && e.target.classList.contains('deleteButton')) {
      deleteTask(element.id);
      e.target.closest(`#listItem${element.id}`).remove();
      //showTasks();
    }
  });
}

function init() {
  const getLocalStorageData = localStorage.getItem('taskList');
  let listArray = getLocalStorageData ? JSON.parse(getLocalStorageData) : [];
  listArray.forEach((element, index) => {
    if (listArray[index].important) {
      document.querySelector(`#listItem${index}`).classList.add('important');
      document.querySelector(`#listItem${index} .importantButton`).classList.add('notImportantButton');
    }
    if(listArray[index].done) {
      document.querySelector(`#listItem${index} span`).classList.add('doneText');
      document.querySelector(`#listItem${index} .doneButton`).classList.add('undoneButton');
    }
  });
}
