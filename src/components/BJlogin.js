import React from "react";
import "./BJlog.css";
import BJhead from "./BJheader";
import BJcourse from "./BJcourse";
const Bjlog = ()=>{
    return(
        <>
        <BJhead/>
        <div className=" container">
<div className="column col-md-6">
<div className="slogin"><label>.................</label>
<h2>Student's LOGIN</h2><label>.................</label>
{/* <label htmlFor="email"> User Name </label>
<input   placeholder="Enter your ID"></input><br/>
<label htmlFor="password"> Password </label>
<input type="password" placeholder="Enter your Password   "></input><br/>
<button className="lgnbtn">LOGIN</button>
<a href="#"> forgot password</a> */}

<div class="wrapper fadeInDown">
  <div id="formContent">

   

    <form onSubmit={BJcourse}>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" class="fadeIn fourth" value="Log In"/>
    </form>

    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
</div>
</div>
<div className="column col-md-6">
<div className="tlogin "><label>.................</label>
<h2>Teacher's LOGIN</h2><label>.................</label>
{/* <label> User Name </label>
<input  placeholder="Enter your ID"></input><br/>
<label> Password </label>
<input type="password" placeholder="Enter your Password"></input><br/>
<button className="lgnbtn">LOGIN</button>
<a href="#"> forgot password</a> */}

<div class="wrapper fadeInDown">
  <div id="formContent">

   

    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" class="fadeIn fourth" value="Log In"/>
    </form>

    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>

</div>
</div>
        </div>
        </>
    )
}
export default Bjlog;