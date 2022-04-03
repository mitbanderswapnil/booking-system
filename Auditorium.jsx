import React from "react";
import { NavLink } from "react-router-dom";
import s6 from "../src/images/s6.jpeg";

const Auditorium=() =>{
    return(
        <>
          <div className="container2">
         <div className=" col-lg-5 mx-auto">
         <h1>Welcome to Auditorium Details</h1>
         <div className="row">
         <div className="col-lg-10">
        <div className="card1">
  <img src={s6} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Auditorium M-1</h5>
    <p className="card-text">Capacity:500</p>
    <NavLink to="/view" className="btn btn-primary">Go</NavLink>
  </div>
</div>
</div>
</div>
</div>
</div>
</>
    )
};

export default Auditorium;