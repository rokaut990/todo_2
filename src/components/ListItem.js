function ListItem(props) {
  const {value, important, done, markImportant, markDone, deleteTask} = props;
  
  return (
    <li className={important ? 'important' : ''}>
      <div className="view">
        <span className={done ? 'done' : ''}>{value}</span>
        <button className={important ? 'notImportantButton' : 'importantButton'} onClick={markImportant}></button>
        <button className={done ? 'undoneButton' : 'doneButton'} onClick={markDone}></button>
        <button className="deleteButton" onClick={deleteTask}></button>
      </div>
    </li>
  );
}

export default ListItem;
