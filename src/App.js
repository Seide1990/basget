import logo from './logo.svg';
import './App.css';
import People from './people';
import data from "./components/data"
import { useState } from 'react';

function App() {
const [array,setarray]=useState(data)
console.log(array)

  return (
<>  
 {array.map((sec,index)=>  
    <div>
<h1> </h1>
 
   
    </div>
   ) }
</>
  
  )
 }
export default App;
