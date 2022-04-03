import React from "react";
import { NavLink } from "react-router-dom";
const Innersem=() =>{
    return(
        <>
        <h1>
  	Details of Seminar Hall 
  </h1> 
  <NavLink to="/view">
  	<button>Back to slot page</button>
      </NavLink>
        </>
    )
};

export default Innersem;