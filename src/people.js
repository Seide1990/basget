import { useState,useReducer, useEffect} from 'react';
import{Link,Outlet} from 'react-router-dom';
//import style from   './style1.module.css';

export default function People(props){
    console.log(props)
    const [array,setarray]=useState();
setarray(props)
return (<>
{/* {array.map((sec,index)=> 
    <div>

    <p>{sec}</p>
   
    </div>)} */}

</>

)

}