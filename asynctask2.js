const async = require("async");

function Calling() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('message');
		}, 2000);
	});
}

async function msg() {
	const msg = await Calling();
	console.log(msg);
}

msg(10);