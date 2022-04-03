import React from "react";
import { NavLink } from "react-router-dom";
const Navigation=() =>{
    return(
            <>
             <div id="box2"> 
            <div className= "container-fluid nav_bg">
            <div className=" row">
                
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-secondary" aria-current="page" to="#">~VAS-Booking~</NavLink>
        <button className="navbar-toggler" type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" 
         aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>

             
              <li className="nav-item">
              <NavLink activeClassName="menu_active" className="nav-link" to="/audi">Auditorium Details</NavLink>
              </li>
              <li className="nav-item">
              <NavLink activeClassName="menu_active"  className="nav-link" to="/semi">Seminar Hall Details</NavLink>
              </li>                      
              <li className="nav-item">
                <NavLink activeClassName="menu_active"  className="nav-link" to="/view">View Slots</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink activeClassName="menu_active"  className="nav-link" to="/Login">Login</NavLink>
              </li>
              <li className="nav-item">
                    <NavLink activeClassName="menu_active"  className="nav-link" to="/Logout">Logout</NavLink>
              </li>


            
            </ul>
           </div>
      </div>
      
    </nav>
    </div>
      </div>
      </div>
      
        </>
    )
};

export default Navigation;