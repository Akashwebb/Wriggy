import { useState } from "react"
import { Link } from "react-router-dom"
import "./front.css"
const Front=()=>{
   
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [phone,setphone]=useState("")
    const valid= name.length && email.length && phone.length===""

    const handle=(e)=>{
        e.preventDefault();
        const valid= name.length && email.length && phone.length === ""
          console.log(valid)
       setname("");
        setemail(" ");
        setphone(" ");
        // <button id="order-button" ><Link to="food" id="link"> ORDER YOUR FOOD </Link> </button>
    }
    
    return(
        <>
        <header id="front-header">
            <img src="./images/logo.jpg" alt="logo" id="logo"></img>
            <h1 id="wriggy">WRIGGY</h1>
                <nav>
                    <ul type="none" id="ul">
                        <li> <a className="li" href="#home">Home</a> </li>
                        <li> <a className="li" href="#jobs"> Jobs </a> </li>
                        <li> <a className="li"href="#about">About Us</a> </li>
                        <li> <a className="li" href="#contact">Contact Us</a> </li>
                       </ul>
                </nav>
        </header>

        <main>
          <div id="front-body">

            <h1 className="front-content">Hey Foodiee ..!! </h1>
            <h2 className="front-content">Welcome Back to wriggy</h2>
            <h4 className="front-content">We serve you the best Food that will make your day</h4>
           
           {/* ------------------------ IMAGES OF CODING -----------------------------------------*/}

            <div id="front-img-and-form">
            <div id="front-image">
                <table>
                    <tr>
                        <td> <img src="./images/eat.png" className="table" id="img1" alt="eat"/> </td>
                        <td> <img src="./images/code.png" className="table" id="img2" alt="eat"/> </td>
                    </tr>
                    <tr>
                        <td> <img src="./images/repeat.png" className="table" id="img3" alt="eat"/> </td>
                        <td> <img src="./images/sleep.png" className="table" id="img4" alt="eat"/> </td>
                    </tr>
                </table>
            </div>
            <div id="front-form">
            <h4 className="form-content">Please share your details </h4>
            <p className="form-content"> Note : this information is only to deliver your food at your location</p>
            
           {/* ---------------------------------- FORM  --------------------------------------------------  */}
          <form id="form" method="get" action="" >
              <div>  <label htmlFor="nam" className="form-label"> Name :</label> <br/>
                <input type="text" id="nam" max="14" name="" placeholder="enter your name" required onChange={(e)=>{setname(e.target.value)}} value={name} /> </div> <br/>

               <div> <label htmlFor="email" className="form-label" > Email :</label><br/>
                <input type="email" id="email" name="" placeholder="enter your email" required onChange={(e)=>{setemail(e.target.value)}} value={email} /></div>  <br/>

                <div> <label htmlFor="phone" className="form-label" > Phone :</label><br/>
                <input type="number" id="phone" name="" placeholder="enter your phone no" required onChange={(e)=>{setphone(e.target.value)}} value={phone} /></div>  <br/>

                <button type="submit"  disabled={valid===0 ? true  :false} onClick={(e)=>{handle(e)}} className="submit">Submit</button> 
                
            </form>
            </div>
           </div >
            
           <div id="fff">
            <div id="front-imgs">
           <img src="./images/bf3.jpg" alt="a" className="front-food" id="a1"></img>
            <img src="./images/ln3.jpg" alt="a" className="front-food" id="a2"></img>
            <img src="./images/st1.jpg" alt="a" className="front-food" id="a3"></img>
            <img src="./images/st3.jpg" alt="a" className="front-food" id="a4"></img>
            <img src="./images/dn3.jpg" alt="a" className="front-food" id="a5"></img>
            <img src="./images/dn4.jpg" alt="a" className="front-food" id="a6"></img>
            <button id="order-button" ><Link to="food" id="link"> ORDER YOUR FOOD </Link> </button>
            </div>
           </div>
            
           
           
           
           </div>
            </main>

                {/* ----------------------------------  FOOTER ----------------------------------- */}
            <footer id="front-footer" >
                   <div id="home" className="foot-div1">
                          <img src="./images/logo.jpg" alt="logo" id="logo1"></img>
                          <h4 className="foot"> Wriggy </h4>
                          <p className="foot-content"> We value your time and deliver a food in the shortest time </p>
                          
                   </div>

                   <div id="about" className="foot-div">
                   <h4 className="foot"> About Us </h4>
                   <p className="foot-content"> Delivery partner </p>
                   <p className="foot-content"> Accept online orders </p>
                   <p className="foot-content"> Case on delivery available </p>
                   <p className="foot-content"> On board since 2016 </p>
                   </div>

                   <div id="contact" className="foot-div">
                   <h4 className="foot"> Contact Us </h4>
                   <p className="foot-content"> Customer Care </p>
                   <p className="foot-content"> +916360319425 </p>
                   <p className="foot-content"> akash@gmail.com </p>
                   <p className="foot-content"> Ragvandra layout 6th cross </p>
                   <p className="foot-content"> Bangalore 560090 </p>
                   </div>
                   
                   <div id="footer-four" className="foot-div">
                       <h4 className="foot">Follow Us</h4>
                       <img src="./images/facebook.jpg" alt="logo" className="foot-image" /> <span className="foot-content" >  Facebook</span> <br/> 
                       <img src="./images/insta.jpg" alt="logo" className="foot-image"></img> <span className="foot-content" >  Instagram</span> <br/> 
                       <img src="./images/linkedin.jpg" alt="logo" className="foot-image"></img> <span className="foot-content" >  Linkedin</span> <br/> 
                       <img src="./images/twitter.jpg" alt="logo" className="foot-image"></img> <span className="foot-content" >  Twitter</span> <br/> <br/>
                   </div>
                   <div className="foot-div2">
                    <label htmlFor="feed" className="foot">Feedback :</label><br/><br/>
                     <input type="text" id="feed" placeholder="your feedback" /><br/>
                     <section><button id="feed-button">Submit</button></section>
                     
                   </div>

            </footer>
          
        </>
    )
}
export default Front