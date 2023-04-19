import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ListItem from './components/ListItem.js';
import Search from './components/Search.js'
import Navigation from './components/navigation.js'
import ToDoListApp from './components/TodoListApp.js';
import MarkImportantButton from './components/MarkImportantButton.js'
import MarkDoneButton from './components/MarkDoneButton.js'
import DeleteButton from './components/DeleteButton.js'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <ListItem />
    <Search />
    <Navigation />
    <ToDoListApp />
    <MarkImportantButton />
    <MarkDoneButton />
    <DeleteButton />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
