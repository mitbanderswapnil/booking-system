// import React from "react";
// import { NavLink } from "react-router-dom";

// const Login=() =>{
//     return(
       
//         <div className="login-content">
//             <div id="box1">
//             <br /> <br /> <br /> <br /> <br /> <br />
//                 <form className="logfo" method="post">
//                     <div className="container">
//                      <center><h1 className="head1">Login</h1></center> 
//                      <label for="uname"><b>Username</b></label><br />
//                      <input type="text" placeholder="Enter Username" name="uname" className="luname" required /><br/>
//                      <label for="psw"><b>Password</b></label> <br />
//                      <input type="password" placeholder="Enter Password" name="psw" className="lpass" required /><br />
//                         {/* <label> */}
//                         {/* <input type="checkbox" checked="checked" name="remember" /> Remember me</label>  */}              
//                      <span className="ad"><NavLink to="./AdminLogin">For Admin</NavLink></span>
//                         <br/><br/>
//                      <span className="ad"><NavLink to="./Signup">Sign Up</NavLink></span> 
//                         <div>
//                             <NavLink to="/">
//                               <br /><br /><button onClick="login()" className="my-butt">Login</button>
//                             </NavLink>
//                         </div>
//                    </div>
//                </form> 
//             </div> 
//         </div> 
//    )
// }

// export default Login;


 
import React from 'react'
import firebase from './firebase'
import { NavLink } from "react-router-dom";

class Login extends React.Component {
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          alert("OTP has been sent on your mobile")
          console.log("OTP has been sent")
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
          alert("SMS not sent")
        });
  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
    //   <NavLink to="/" />
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      alert("OTP you entered is incorrect")
    });
  }
  render() {
    return (
    
      <div className="login-content">
            <div id="box1">
       <div className="container">
       <div className="logfo">
        <center><h2 className="head1">Login Form</h2></center>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <label>Enter Mobile number</label>
          <input type="number" name="mobile" className="luname" placeholder="Mobile number" required onChange={this.handleChange}/>
          <button type="submit"  className="my-butt">Submit</button>
        </form>

        <label>Enter OTP</label>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" className="lpass" required onChange={this.handleChange}/>
          <button type="submit" className="my-butt">Submit</button>
         
        </form>
        </div>
        </div>
        </div>
        </div>
    )
  }
}
export default Login
