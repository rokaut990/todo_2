import React, { useState, useEffect } from 'react';
import ListItem from './components/ListItem.js';


function Header() {
  return (
    <header>
      <a href="index.html\"><img src="./images/logo.svg" alt="logo" id="logo" /></a>
      <input type="search" placeholder="Search for task to do" id="search" />
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <form>
        <input type="radio" id="all" name="layout" value="All" defaultChecked /><label htmlFor="all" tabIndex="0">All</label>
        <input type="radio" id="important" name="layout" value="Important" /><label htmlFor="important" tabIndex="0">Important</label>
        <input type="radio" id="active" name="layout" value="Active" /><label htmlFor="active" tabIndex="0">Active</label>
        <input type="radio" id="done" name="layout" value="Done" /><label htmlFor="done" tabIndex="0">Done</label>
      </form>
    </nav>
  );
}

function Main() {
  return (
    <main>
      <form>
        <label htmlFor="newTaskInput" className="newTaskLabel">New task</label>
        <textarea id="newTaskInput" className="newTaskInput" placeholder="Add your new todo" title="" />
        <button id="add" type="submit">ADD</button>
      </form>
      <div className="list">
        <ul className="todoList"></ul>
        
        {/* <ul>
        {listArray?.map((item, index) => (
          <li key={index} id={`ListItem${index}`} className="">
            <input type="checkbox" id={`check${index}`} />
            <label htmlFor={`check${index}`} className="">{item.value}</label>
          </li>
        ))}
      </ul> */}
      </div>
    </main>
  );
}


function App() {
  
  return (
    <>
      <Header />
      <Nav />
      <Main />
    </>
    
  );
  
}

export default App;
