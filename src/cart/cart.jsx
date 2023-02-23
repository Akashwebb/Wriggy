//import { useState } from "react"
import "./cart.css"
const Cart=(props)=>{
         
     const handle=((e)=>{
        let flag="true"
        for(let i=0;i<props.naming.length;i++){
            if(props.naming[i].name===e.name){
             props.naming[i].count++
             props.naming[i].price+=20
                props.setnameing([...props.naming])
                flag="false"
            }
        }
        if(flag==="true"){
            props.setnameing([...props.naming,{name:e.name,price:e.price,count:1}])
        }
      
        
     })
      
    return(
        <div id="main">
        <div id="box">
           <div id="number"> {props.val.number} </div>  
           <div id="name"> {props.val.name} </div> 
              <div id="category"> - {props.val.category}</div> 
              <div id="description"> - {props.val.description}</div>
              <span id="price"> ____________________________ {props.val.price}</span> <br/> <br/>
              <div id="img-container" > <img id="image"src= {props.val.image} alt="food"/></div>
              <button id="add-button" onClick={(e)=>{handle(props.val)}}  >Add</button>
              <br/> <br/>
              <ul>
              
              </ul>
              
        </div> 
        </div>
    )
}
export default Cart