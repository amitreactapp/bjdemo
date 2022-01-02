import React from "react";
import "./header.css";
import Bjlog from "./BJlogin";
import {BrowserRouter, Link, Route, Routes } from "react-router-dom";
const BJhead=()=>{
    return(
        <>
        
            <div className="HeaderNew">
 <div  className="item" >    <img id="complogo" src="./BJlogo.jpg" alt="Logo"/>
 </div>
 <div className="item" >Course material</div>
 <div  className="item" >Our Achievers</div>
 <div  className="item">Packages</div>
 <div className=" item">Scholarships</div>
 <div className="primary-login-btn" id="btnlogin" ><Link id="loginlink" to="/BJlogin">Login</Link></div>

</div>
<Routes>
    <Route exact path="/BJlogin"  component={Bjlog}/>
</Routes>
</> 
    )
}
export default BJhead;