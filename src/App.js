import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Restaurant from "./Res/restaurant";
import Front from "./FrontPage/front";
import Final from "./last/final";
function App() {
  return (
    <>
    
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<Front/> }/>
             
             <Route path="food" element={<Restaurant/> } />
             <Route path="food/final" element={<Final/> } />
          </Routes>
       
       </BrowserRouter>
    </>
  );
}

export default App;
