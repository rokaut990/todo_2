import React from 'react';

const getLocalStorageData = localStorage.getItem('taskList');
const listArray = JSON.parse(getLocalStorageData);

const MarkDoneButton = ({ index, listArray }) => {

  const markDone = () => {
    !listArray[index].done ? listArray[index].done = true : listArray[index].done = false;
    localStorage.setItem('taskList', JSON.stringify(listArray));
  }

  return (
    <button className={`doneButton ${listArray[index].done ? 'undoneButton' : ''}`} onClick={markDone}>
      {listArray[index].done ? 'Mark Undone' : 'Mark Done'}
    </button>
  );
};


export default MarkDoneButton