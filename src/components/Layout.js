import { useState,useReducer} from 'react';
 import { Link,Outlet } from 'react-router-dom';
 import style from './basket.module.css';

//import './style.css'


export default function Layout(props){

const [array,usearray]=useState([{
    "id":0,
    "img":'https://thumbs.dreamstime.com/z/apple-tree-16327363.jpg?w=992',
    "title":"quba apple",
    "price": 2.96,
    "count":0
},
{
    "id":1,
    "img":'data:image/jpeg;base64,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',
    "title":"baki",
    "price":2.96,
    "count":0
}])
const [basket,setbasket]=useState([]);


function Artir(index){

    usearray(array.map(product => {
      if (product.id === index) {
        return {
          ...product,
          count: product.count + 1,price:((product.count==0) ? product.price : 2.96*product.count)
        
        };
      } else {
        return product;
      }


      
    }))
}


function Azalt(index){

    usearray(array.map(product => {
      if (product.id === index) {
        if(product.count!=0){
        return {
          ...product,
          count: product.count - 1,price:((product.count==0) ? product.price : 2.96*product.count)
        }}
        else {
         return product
        }
      } else {
        return product;
      }
    }))

}
function Add(){
  var resuld_count=0;
  for (let item of array){
    resuld_count+=item.count;
  }
  setbasket(resuld_count);

}
    

    return(
        <>
    <div className={style.navsebet}>
      <h1>E-commerce</h1>
      <h2>Home</h2>
    <p > {basket}</p>
        <button className={style.add} onClick={Add}>sebete elave et</button>
       
        </div>
        <div className={style.main_box}>
        {array.map((sec,index)=> 
     <div className={style.postcard}>     
 <img  className={style.img} src={sec.img}></img>
<h2>{sec.title}</h2>
<h2>{sec.price}</h2>
<div className={style.count}> 
<button onClick={() => Azalt(index) } > -</button>
<h2>{sec.count}</h2>
<button onClick={() => Artir(index)} > +</button>
</div> 
</div>
        )}
        

</div>
        {/* <nav>
            <ul>
        <li><Link to={'/Home'}> Home</Link> </li>
        <li><Link to={'/Basket'}> Contact</Link> </li>
      
        </ul>
        </nav> */}
       
       </>
    )

}