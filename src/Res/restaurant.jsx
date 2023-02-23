import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Cart from "../cart/cart"
import "./res.css"
const Restaurant=()=>{
  const [data,setdata]=useState([]);
  const [item,setitem]=useState([])
  const [name,setname]=useState([])
  useEffect(()=>{
     fetch("http://localhost:3001/user").then((info)=>{
      return info.json()}).then((res)=>{
        setdata(res)
        setitem(res)
        
      }).catch((err)=>{
        console.log(err)
      })
  },[])
  
  const handle=(e)=>{

    console.log(e)
    let arr2=[]
    for(let i=0;i<data.length;i++){
      if(e==="Breakfast"){
        if(data[i].category==="Breakfast"){
          arr2.push(data[i])
          setitem(arr2)
        }
      }
      else if(e==="Lunch"){
        if(data[i].category==="Lunch"){
          arr2.push(data[i])
          setitem(arr2)
        }
      }
      else if(e==="Dinner"){
        if(data[i].category==="Dinner"){
          arr2.push(data[i])
          setitem(arr2)
        }
      }
      else if(e==="Sweets"){
        if(data[i].category==="Sweets"){
          arr2.push(data[i])
          setitem(arr2)
        }
      }
      else {
        setitem(data)
      }
      
    }
   
  }
   return (
        <> 
        <div id="ordering">
        <table id="tab">
          <tbody>
          {name.map((item,key)=>{
                return(
                  <div id="todo" >
                   <tr key={key} id="trr">
                    <td id="item-name"  > {item.name} </td>
                    <td id="item-count" >{item.count}</td>
                   </tr>
                  
                  </div>
                  )
              })}
         </tbody>
          <tfooter>
          <tr>
              <th id="item-total"> {item.price}</th>
            </tr>
          </tfooter>
          
        </table>
        <button id="ordering-final"> <Link to="final" id="aaa">Order Now !</Link>  </button>
        </div>
            

           <div id="nav-container">
             <div id="order">
                 <h2 id="lets-order">Let's go ...!!  Order your Favorite Food </h2>
                 
             </div>
             

           <nav id="head" >
                <button className="button" onClick={(e)=>{handle("Breakfast")}}>Breakfast</button>
                <button className="button" onClick={(e)=>{handle("Lunch")}}>Lunch</button>
                <button className="button" onClick={(e)=>{handle("Dinner")}}>Dinner</button>
                <button className="button" onClick={(e)=>{handle("Sweets")}}>Sweets</button>
                <button className="button" onClick={(e)=>{handle("All")}}>All</button>
              </nav>
              </div> 
          {
            item.map((value)=>{
              return(
                <>
                   <Cart val={value} setnameing={setname} naming={name} />
                  
                </>
              )
            })
          }
        
        </>
    )
}
export default Restaurant