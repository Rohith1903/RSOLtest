const fs = require ("fs");

// STEP 1: READSING JSON file
const users = require("./employe1");

// Defining new user
let user = {
	fname : "Sam",
	lname: "Adams",
	age:21,
	empid:6
};

// Defining a another new user
let user1 = {
	fname : "John",
	lname:"wick",
	age : 32,
	empid:7
};

//STEP 2: ADDING NEW DAT TO USER Object
users.push(user);
users.push(user1)

//STEP 3: WRITING TO A file
fs.writeFile("employee.json", JSON.stringify(users), err => {
	
	// Checking for errors
	if (err) throw err;
	
	console.log("Done writing"); //Success
	
});
	
