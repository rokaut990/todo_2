import React from 'react';

const getLocalStorageData = localStorage.getItem('taskList');
const listArray = JSON.parse(getLocalStorageData);

const MarkImportantButton = ({ index, listArray }) => {

  const markImportant = () => {
    !listArray[index].important ? listArray[index].important = true : listArray[index].important = false;
    //console.log(listArray[index].);
    localStorage.setItem('taskList', JSON.stringify(listArray));
  }

  return (
    <button className={`importantButton ${!listArray[index].important ? 'notImportantButton' : ''}`} onClick={markImportant}>
      {!listArray[index].important ? 'Mark Important' : 'Remove Importance'}
    </button>
  );
};

export default MarkImportantButton