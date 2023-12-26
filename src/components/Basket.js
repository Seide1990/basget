import { useState,useReducer, useEffect} from 'react';
import{Link,Outlet} from 'react-router-dom';
//import style from   './style1.module.css';






export default function Basket(){

    return (<>
    <h1> Basket page</h1>
    <Outlet/>
    </>)
}