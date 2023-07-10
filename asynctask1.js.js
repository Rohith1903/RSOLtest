const Sqr=(a)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(a*a);
		},2000)
	});
}

async function out(){
	let res = await Sqr(2);
	console.log(res);
	let res1 = await Sqr(res);
	console.log(res1);
	let res2 = await Sqr(res1);
	console.log(res2);
	let res3 = await Sqr(res2);
	console.log(res3);
	
	
}

out();	