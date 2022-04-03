import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router";
import Login from "./Login";
import Home from "./Home";
// import Details from "./Details"
import Seminar from "./Seminar";
import Auditorium from "./Auditorium";
import View from "./View";
import Navigation from "./Navigation";
import Continuebooking from "./Continuebooking";
import Innersem from "./Innersem";
import Booking from "./Booking";
import Logout from "./Logout";
import AdminLogin from "./AdminLogin";
import SignUp from "./SignUp";

const App=()=>{
    return(
        <>
       
       {/* <Login /> */}
          <Navigation />
          <Switch> 
            <Route exact path="/home" component={Home} />
            <Route exact path="/semi" component={Seminar} />
            {/* <Route exact path="/det"  component={Details} /> */}
            <Route exact path="/audi" component={Auditorium} />
            <Route exact path="/view" component={View} />
            <Route exact path="/continuebooking" component={Continuebooking}/>
            <Route exact path="/in" component={Innersem} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/AdminLogin" component={AdminLogin} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/signup" component={SignUp} />
              
            <Redirect to = "/" />

          </Switch> 
          
        </>
    );
}
export default App;