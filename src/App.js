import './App.css';
import React, {useState} from 'react';
import List from './List'

function App() {
  
  const [currentItem, setcurrentItem] = useState(null)
  const [itemList, updateItemList] = useState([])
  const onchangeHandler = (e) =>{
    // console.log(e.target.value)
    setcurrentItem(e.target.value)
  }
  const UpdateListHandler =() =>{
    updateItemList([...itemList, {item: currentItem, key: Date.now()}])
    setcurrentItem("")
    // console.log(itemList)
  }

  return (
    <div className="App">
      <h2>Todo List</h2>
      <header className="App-header">
      <div className="wrapper">
        <div className="inputWrapper">
        <input value={currentItem} onChange={onchangeHandler} className="input" placeHolder="Enter your text"/>
        <button onClick={UpdateListHandler} className="add">Add</button>
        </div>
        <List updateItemList={updateItemList} itemList={itemList}/>
      </div>
      </header>
    </div>
  );
}

export default App;
