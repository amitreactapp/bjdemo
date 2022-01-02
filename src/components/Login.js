import React from "react";
const Login=()=>{
    return(
        <>
    <h1></h1>

<div class="wrapper fadeInDown">
  <div id="formContent">
    <div class="fadeIn first">
      <img src="logo.jpg" id="icon" alt="User Icon" />
      <h3>Muzaher Welcomes You</h3>
    </div>

    <form onsubmit=" return validate()" action="https://fitfood.knowyourfood.in/dietitian_profile" >
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" class="fadeIn fourth" value="Log In" onclick="login()"/>
    </form>

    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
  
        </>
    )
}
export default Login;