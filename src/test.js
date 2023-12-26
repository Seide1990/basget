import { useState,useReducer, useEffect} from 'react';
import{Link,Outlet} from 'react-router-dom';
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          import style from   './style1.module.css';


export default function Home(){
    useReducer(reducer,{})
  const[ array,usearray]= useState([
        {
          question: 'What is 2 + 2?',
          options: ['3', '4', '5', '6'],
          answer: '4',
        },
        {
          question: 'Which is the capital of France?',
          options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
          answer: 'Paris',
        },
      ])

      return (
        <> 
        <h1>Quiz App</h1>
        <h2>What is 2 + 2?</h2>
        <button></button>
        
        </>
      )
}