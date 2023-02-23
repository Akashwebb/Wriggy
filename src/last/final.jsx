
import { Link } from "react-router-dom"
import "./final.css"
const Final=()=>{
    return (
        
        <div id="final-full">
            <h1 id="text"> Your Order has been received</h1>
            <img src="https://funtura.in/lko/wp-content/themes/funtura/assets/images/success.svg" alt="tick" id="tick"/>
            <h3 id="thank">Thankyou for you Order..!!</h3>
            <h3 id="order-id">Your Order Id is : {(Math.random()*10000000000).toFixed(0) }  </h3>
            <button id="re"> <Link to="/food" id="re-link">Order more</Link> </button>
            </div>
        
    )
}
export default Final