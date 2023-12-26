import { useState,useReducer, useEffect} from 'react';
import{Link,Outlet} from 'react-router-dom';
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          import style from   './style1.module.css';


export default function Home(){
const [item,setitem]=useState([]);
const [count,setcount]=useState(0);

function AddItem(index){
    var x=count+1;
    setcount(x);
    setitem([...item,`item${count}`])
}
function Remove(index){
    
    setitem(item.filter(i => i.index != index))
}

    return (<>
    <h1> Basket App</h1>
    <p>Items in Basket:</p>
    <button  onClick={AddItem}></button>
    {item.map((sec,index)=> 
    <div>

    <p>{sec} </p>
    <button onClick={Remove(index)}>remove</button> 
    </div>)}

    </>)
}