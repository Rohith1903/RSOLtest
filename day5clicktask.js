const express = require('express')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/mouseclick.html");
});

app.post("/", (req,res) => {
	const username = req.body.username;
	const password = req.body.password;
	console.log(`Username:${username}`);
	console.log(`Password:"${password}`);
res.send(`Welcome ${username} this is your password: ${password}`);
});

app.listen(9090);	