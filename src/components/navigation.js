import React, {useState, useEffect} from 'react';

function Navigation() {
  const [listArray, setListArray] = useState([]);

  const getLocalStorageData = localStorage.getItem('taskList');
  
  useEffect(() => {
    if (getLocalStorageData) {
      setListArray(JSON.parse(getLocalStorageData));
    }
  }, [getLocalStorageData]);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(listArray));
  }, [listArray]);

  const showAllTasks = () => {
    listArray.forEach((element, index) => {
      const ListItem = document.querySelector(`#ListItem${index}`);
      if(ListItem) ListItem.classList.remove('invisible');
    });
  }

  const showImportantTasks = () => {
    listArray.forEach((element, index) => {
      const ListItem = document.querySelector(`#ListItem${index}`);
      if(ListItem) {
        if (element.important) {
          ListItem.classList.remove('invisible');
        } else {
          ListItem.classList.toggle('invisible');
        }
      }
    });
  }

  const showActiveTasks = () => {
    listArray.forEach((element, index) => {
      const ListItem = document.querySelector(`#ListItem${index}`);
      if(ListItem) {
        if (!element.done) {
          ListItem.classList.remove('invisible');
        } else {
          ListItem.classList.toggle('invisible');
        }
      }
    });
  }

  const showDoneTasks = () => {
    listArray.forEach((element, index) => {
      const ListItem = document.querySelector(`#ListItem${index}`);
      if(ListItem) {
        if (element.done) {ListItem.classList.remove('invisible');
        } else {
          ListItem.classList.toggle('invisible');
        }
      }
    });
  }

  return (
    <div>
      <div>
        <button id="all" onClick={showAllTasks}>ALL</button>
        <button id="important" onClick={showImportantTasks}>IMPORTANT</button>
        <button id="active" onClick={showActiveTasks}>ACTIVE</button>
        <button id="done" onClick={showDoneTasks}>DONE</button>
      </div>
      {/* <ul>
        {listArray?.map((item, index) => (
          <li key={index} id={`ListItem${index}`} className="">
            <input type="checkbox" id={`check${index}`} />
            <label htmlFor={`check${index}`} className="">{item.value}</label>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Navigation;
