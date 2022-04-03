import React from "react";
import { NavLink } from "react-router-dom";

const SignUp=() =>{
    return(
       
        <div className="login-content">
            <div id="box1">
            <br /> <br /> <br /> <br /> <br /> <br />
                <form className="logfo" method="post">
                    <div className="container">
                     <center><h1 className="head1">Sign Up</h1></center> 
                     
                     <label for="uname"><b>First Name</b></label><br />
                     <input type="text" placeholder="Enter Firstname" name="uname" className="luname" required /><br/>

                     <label for="uname"><b>Last Name</b></label><br />
                     <input type="text" placeholder="Enter Lastname" name="uname" className="luname" required /><br/>

                     <label for="uname"><b>Branch</b></label><br />
                     <input type="text" placeholder="Enter Branch" name="uname" className="luname" required /><br/>

                     <label for="uname"><b>Username</b></label><br />
                     <input type="text" placeholder="Enter Username" name="uname" className="luname" required /><br/>

                     <label for="psw"><b>Password</b></label> <br />
                     <input type="password" placeholder="Enter Password" name="psw" className="lpass" required /><br />
                     
                        {/* <label> */}
                        {/* <input type="checkbox" checked="checked" name="remember" /> Remember me</label>  */}              
                     <span className="ad"><NavLink to="./Login">Already Have An Account </NavLink></span> 
                     
                        <div>
                            <NavLink to="/">
                              <br /><br /><button onClick="login()" className="my-butt">Login</button>
                            </NavLink>
                        </div>
                   </div>
               </form> 
            </div> 
        </div> 
   )
}

export default SignUp;


 {/* <form class="form-container" onsubmit=" return validate()">
            <h3>Login Form</h3>
            <div class="form-grp">
                <label for="=username">Username</label><br />
                <input type="text" name="username" placeholder="Username" id="user" />
                <i class="fa fa-times u_times"></i>
                <i class="fa fa-check u_check"></i>
            </div>

            <div class="form-grp">
                <label for="password">Password</label><br /> 
                <input type="password" name="password" placeholder="Password" id="pass" />
                <i class="fa fa-times p_times"></i>
                <i class="fa fa-check p_check"></i>
            </div>
            
            <div class="forgot"><a href="#">Forgot Password?</a>
            </div>
            <div class="form-grp">
                <input type="submit" name="Login-btn" value="Login" />
            </div>
        </form>  */}


 
