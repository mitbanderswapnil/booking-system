import React from "react";
import { NavLink } from "react-router-dom";


const AdminLogin=() =>{
    return(
       
        <div className="login-content">
            <div id="box1">
            <br /> <br /> <br /> <br /> <br /> <br />
                <form className="logfo" method="post">
                    <div className="container">
                     <center><h1 className="head1">Login</h1></center> 
                     <label for="uname"><b>Username</b></label><br />
                     <input type="text" placeholder="Enter Username" name="uname" className="luname" required /><br/>
                     <label for="psw"><b>Password</b></label> <br />
                     <input type="password" placeholder="Enter Password" name="psw" className="lpass" required /><br />
                        {/* <label> */}
                        {/* <input type="checkbox" checked="checked" name="remember" /> Remember me</label>  */}              
                     <span className="ad"><NavLink to="./Login">For User</NavLink></span> 
                     
                        <div>
                            <NavLink to="/home">
                              <br /><br /><button onClick="login()" className="my-butt">Login</button>
                            </NavLink>
                        </div>
                   </div>
               </form> 
            </div> 
        </div> 
   )
}
// function login(){
//     window.location("App.jsx");
//     }
export default AdminLogin;



 
