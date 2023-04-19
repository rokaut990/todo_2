import React, {useState, useEffect} from 'react';

function Search() {
    const [searchValue, setSearchValue] = useState('');
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

    const searchTask = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div>
        <input 
        type="text" 
        id="search"
        value={searchValue}
        onChange={searchTask}
        placeholder="Search Tasks"
      />
        </div>
    )
}

export default Search;
