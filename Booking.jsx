// import React, { useState } from "react";
import React from 'react';
 const Booking=() =>{
// 	const [user, setUser]= useState({
// 		name: "",
// 		department: "",
// 		email: "",
// 		contact: "",
// 		fromdate: "",
// 		todate: "",
// 		eventstart: "",
// 		eventend: "",
// 		seminarhallblock: "",
// 		seminarhallname: "",
// 		number: "",
// 		purpose: "",
// 	});
	
	// let name, 
	//  const getUserData=() => {
	// 	 name:event.target.name;
	// 	 event
	//  };
    return(
        <>
		 <div id="box2"> 
        <div className="container3">
		<center>
		<form>
			<fieldset>
				<table>
				<br />
					<h1 className="head2 mt-4">Online Booking Form</h1>
					
					<tr>
						<th>Name of the Faculty</th>
						<td>:</td>
						<td><input type="text" name="name" classname="hello" id="name1" placeholder="Enter Your name" /></td>
				   </tr><th></th>
					<tr>
						<th>Department</th>
						<td>:</td>
						<td><input type="department" name="department" id="department1" placeholder="Enter department name" /></td>
				   </tr><th></th>	
					<tr>
						<th>Email Id</th>
						<td>:</td>
						<td><input type="email" name="email" id="email1" placeholder="Enter email id" /></td>
				   </tr><th></th>	
					<tr>
						<th>Contact</th>
						<td>:</td>
						<td><input type="number" name="number" id="number1" placeholder="Enter Mob no" /></td>
				   </tr><th></th>	
					<tr>
						<th>From Date</th>
						<td>:</td>
						<td><input type="date" id="name" name="DOB" /></td>
				   </tr><th></th>	
					<tr>
						<th>To Date</th>
						<td>:</td>
						<td><input type="date" id="name1" name="DOB" /></td>
				   </tr><th></th>
				   <tr>
						<th>Event Start Time</th>
						<td>:</td>
						<td><input type="time" name="number" id="name1" placeholder="Enter event time" /></td>
				   </tr><th></th>
				   <tr>
						<th>Event End Time</th>
						<td>:</td>
						<td><input type="time" name="number" id="name1" placeholder="Enter event time" /></td>
				   </tr><th></th>	
				   <tr>
						<th>Seminar Hall Block</th>
						<td>:</td>
						<td>
							<select name="Seminar Hall Block">
								<option value="A Block">A Block</option>
								<option value="B Block">B Block</option>
								<option value="D Block">D Block</option>
								<option value="E Block">E Block</option>
								<option value="F Block">F Block</option>
								<option value="M Block">M Block</option>
							</select>
					   </td>
				   </tr><th></th>
				   
				   <tr>
						<th>Seminar Hall Name</th>
						<td>:</td>
						<td>
							<select name="Seminar Hall">
								<option value="Seminar Hall A-1 ">Seminar Hall A-1</option>
								<option value="Seminar Hall A-2 ">Seminar Hall A-2</option>
								<option value="Seminar Hall A-3 ">Seminar Hall A-3</option>
								<option value="Seminar Hall B-1 ">Seminar Hall B-1</option>
								<option value="Seminar Hall B-2 ">Seminar Hall B-2</option>
								<option value="Seminar Hall B-3 ">Seminar Hall B-3</option>
								<option value="Seminar Hall D-1 ">Seminar Hall D-1</option>
								<option value="Seminar Hall D-2 ">Seminar Hall D-2</option>
								<option value="Seminar Hall D-3 ">Seminar Hall D-3</option>
								<option value="Seminar Hall E-1 ">Seminar Hall E-1</option>
								<option value="Seminar Hall E-2 ">Seminar Hall E-2</option>
								<option value="Seminar Hall E-3 ">Seminar Hall E-3</option>
								<option value="Seminar Hall F-1 ">Seminar Hall F-1</option>
								<option value="Seminar Hall F-2 ">Seminar Hall F-2</option>
								<option value="Seminar Hall F-3 ">Seminar Hall F-3</option>
								<option value="Seminar Hall M-1 ">Seminar Hall M-1</option>
								<option value="Seminar Hall M-2 ">Seminar Hall M-2</option>
								<option value="Seminar Hall M-3 ">Seminar Hall M-3</option>
							</select>
					   </td>
				   </tr><th></th>
				   <tr>
						<th>Number of people expected</th>
						<td>:</td>
						<td><input type="number" name="number" id="number1" placeholder="Enter expected no" /></td>
				   </tr>
				   <tr>
						<th>Purpose of the Event</th>
						<td>:</td>
						<td><input type="text" name="purpose" classname="hello" id="purpose1" placeholder="Enter event purpose" /></td>
				   </tr><th></th>	
				</table>
				
				<div>
					<tr>
						<td>
							<input type="Submit" value="Submit" name="Submit" id="send1" />
						</td>
					</tr>
				</div>
			</fieldset>
		</form>
	</center>
    </div>
	</div>
    </>
    )
};

export default Booking;