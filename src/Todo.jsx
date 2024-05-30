import React, { useState } from 'react'
import Todoio from './Todoio.1'
import Tododis from './Tododis.1';

function Todo() {
  const[list,Setlist]=useState([]);
  console.log(list);
  return (
    <>
       
      <Todoio setlist={Setlist}/>
      <Tododis lists={list}/>
  
        
    </>
    
  )
}



export default Todo