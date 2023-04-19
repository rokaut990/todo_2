import react from 'react';

function NavigationApp() {
  return (
    <div>
      <header>
      <a href="index.html\">
      <img src="./images/logo.svg" alt="logo" id="logo" />
      </a>
      <input 
        type="search" 
        id="search"
        placeholder="Search for tasks to do"
      />
      </header>
      <nav>
        <form>
        <input type="radio" id="all" name="layout" value="All" defaultChecked /><label htmlFor="all" tabIndex="0">All</label>
        <input type="radio" id="important" name="layout" value="Important" /><label htmlFor="important" tabIndex="0">Important</label>
        <input type="radio" id="active" name="layout" value="Active" /><label htmlFor="active" tabIndex="0">Active</label>
        <input type="radio" id="done" name="layout" value="Done" /><label htmlFor="done" tabIndex="0">Done</label>
        </form>
      </nav>
    </div>
  );
}


function NavigationAppFunction() {
  const searchInput = document.getElementById('search');
  const allTasksButton = document.getElementById('all').nextElementSibling;
  const importantTasksButton = document.getElementById('important').nextElementSibling;
  const activeTasksButton = document.getElementById('active').nextElementSibling;
  const doneTasksButton = document.getElementById('done').nextElementSibling;
  const getLocalStorageData = localStorage.getItem('taskList');
  const listArray = JSON.parse(getLocalStorageData);


  searchInput.addEventListener('input', searchTask);
  function searchTask() {
    listArray.forEach((element, index) => {
      listArray[index].value.includes(searchInput.value) ? document.querySelector(`#listItem${index}`).classList.remove('invisible') :
      document.querySelector(`#listItem${index}`).classList.add('invisible');
      console.log('waorks')
    });
  }

  allTasksButton.addEventListener('click', showAllTasks);
  function showAllTasks(e) {
    listArray.forEach((element, index) => {
    document.querySelector(`#listItem${index}`).classList.remove('invisible');
    });
  }

  importantTasksButton.addEventListener('click', showImportantTasks);
  function showImportantTasks() {
    listArray.forEach((element, index) => {
      !listArray[index].important ? document.querySelector(`#listItem${index}`).classList.add('invisible') :
      document.querySelector(`#listItem${index}`).classList.remove('invisible');
    });
  }

  activeTasksButton.addEventListener('click', showActiveTasks); 
  function showActiveTasks() {
    listArray.forEach((element, index) => {
      !listArray[index].done ? document.querySelector(`#listItem${index}`).classList.remove('invisible') : 
      document.querySelector(`#listItem${index}`).classList.add('invisible');
    });
  }

  doneTasksButton.addEventListener('click', showDoneTasks);
  function showDoneTasks() {
    listArray.forEach((element, index) => {
      !listArray[index].done ? document.querySelector(`#listItem${index}`).classList.add('invisible') : 
      document.querySelector(`#listItem${index}`).classList.remove('invisible');
    });
  }

}
export {NavigationApp, NavigationAppFunction};
