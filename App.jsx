import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

const App = () => {
  const [inputList , setInputList]= useState("");
  const [Items , setItems]= useState([]);
  const itemEvent = (event)=>{
    setInputList(event.target.value);
  };

  const listofItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems, inputList];// in this function we include all the added data, ...(spread operator) it helps to include all the old datas from the list 
    });
    setInputList(" ");// remove or empty the input string box after adding the item 
  };
  const deleteItems=(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem ,index)=>{
        return index !==id;

      })
    })
 };

  return (
    <>
    <div className="main_div">
      <div className='center_div'>
        <br/>
        <h1>TODO LIST </h1>
        <br/>
        <input type='text' placeholder='Add a Items' onChange={itemEvent}/>
        <button onClick ={listofItems}> + </button>
        <ol>
          {/*<li>inputList}</li>*/}
          {Items.map((itemval, index )=> {// used to store the items in the  list using map Array
            return <ToDoLists key={index} 
            id={index}
            text={itemval}
            onSelect={deleteItems}
            />;
          })}
             </ol>
      </div>
    </div>
    
    
    </>
  )
}

export default App; 