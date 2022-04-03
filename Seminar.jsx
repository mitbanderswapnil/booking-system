import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import s4 from "../src/images/s4.jpeg";
import s5 from "../src/images/s5.jpeg";



const Seminar=() =>{
    return(
        <>
        <div className="container1">
        <div className=" col-lg-10 mx-auto">
        <h1 className="text-center">Welcome to Seminar Hall Details</h1>
        <div className="row">
         <div className="col-lg-4">
        <div className="card2">
  <img src={s4} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Seminar Hall A-1</h5>
    <p className="card-text">Capacity:200</p>
    <NavLink to="/view" className="btn btn-primary">Go to slots</NavLink>
  </div>
</div>
</div>

<div className="col-lg-4">
        <div className="card2">
  <img src={s4} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Seminar Hall A-2</h5>
    <p className="card-text">Capacity:200</p>
    <NavLink to="/view" className="btn btn-primary">Go to slots</NavLink>
  </div>
</div>
</div>

<div className="col-lg-4">
        <div className="card2">
  <img src={s4} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Seminar Hall A-3</h5>
    <p className="card-text">Capacity:200</p>
    <NavLink to="/view" className="btn btn-primary">Go to slots</NavLink>
  </div>
</div>
</div>
<div className="col-lg-4">
        <div className="card3">
  <img src={s5} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Seminar Hall M-2</h5>
    <p className="card-text">Capacity:100</p>
    <NavLink to="/view" className="btn btn-primary">Go to slots</NavLink>
  </div>
</div>
</div>

<div className="col-lg-4">
<div className="card3">
<div className="right">
  <img src={s5} className="hello card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Seminar Hall M-3</h5>
    <p className="card-text">Capacity:100</p>
    <NavLink to="/view" className="btn btn-primary">Go to slots</NavLink>
  </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</>
    )
};

export default Seminar;