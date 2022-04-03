import React from "react";
import { NavLink } from "react-router-dom";
const View=() =>{
    return(
        <>
     
     <div className="bbg">
     <br/> <br/> 
            <h1 className="title">Online Seminar Hall/Auditorium Booking</h1>
      <div className="div1">
      <button className="my-button">A Block</button>
       
      <button className="my-button-2">Seminar Hall A-1</button>

      <button className="my-button-3">Seminar Hall A-2</button>

      <button className="my-button-4">Seminar Hall A-3</button> <br />
      
      <button className="my-button-5">M Block</button>
     
      <button className="my-button-6">Auditorium M-1</button>

      <button className="my-button-7">Seminar Hall M-2</button>
     
      <button className="my-button-8">Seminar Hall M-3</button> <br />

      <tr>
        <td>
    <NavLink to="/semi">
      <button className="my-button-9 btn-success">Click to the details</button> 
    </NavLink>
     
      <NavLink to= "/continuebooking">
      <button className="my-button-10 btn-info">Click to continue booking</button> 
    </NavLink>
  </td>
</tr>
</div>
</div>
        </>
    )
};

export default View;