import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Create from "./createComponent/CreateQuize/CreatQuize";
import Register from "./createComponent/Register/Register";
import Login from "./createComponent/Login/login";
import Home from "./createComponent/Home/Home";
import Navbar from "./createComponent/Navbar/Navbar";
import AddQ from "./createComponent/AddQuestion/AddQ"
import  Env from 'dotenv'
 
Env.config({path: './config/config'})

function App(props) {
// console.log(process.env.API_BASE_URL)
//console.log(props);
  
  return (  
    <div>
      <BrowserRouter> 
      <div>
        <Navbar />
          <Route path="/addQ" component={AddQ}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/create" component={Create}></Route>
          <Route path="/home" component={Home}></Route>
          
      </div>
      </BrowserRouter>
      </div>
  )
}

export default App;
