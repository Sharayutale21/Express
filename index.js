const express = require('express');
const app = express();

let port = 8080;

app.listen(port,()=>{
	console.dir(`app is listening on port ${port}`);
})
//app.use((req,res)=>{
//	console.log("request received");
//	let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>";
//	res.send(code);
//	res.send({
//		fruit: "Apple",
//		color: "red",
//	})
//})

//app.get('/',(req,res)=>{
//	res.send("hello , I am root path")
//})
//app.get('/apple',(req,res)=>{
//	res.send("You contacted apple path");
//})
//app.post("/",(req,res)=>{
//	res.send("You sent a post req to root path");
//})

//app.get('/:username/:id',(req,res)=>{
//	//let {username,id} = req.params
//	//res.send(	`hello ${username} your id is ${id}`)

//	//tags
//	let {username,id} = req.params
//	let htmlStr = `<h1>welcome to the page of @${username} whose id is ${id}</h1>`
//	res.send(htmlStr);
//})


//app.get('/search',(req,res)=>{
//	let {q} = req.query
//	res.send(`search results for query ${q}`)
//})

//app.get('/search',(req,res)=>{
//	let {q} = req.query
//	if(!q){
//		res.send("<h1>nothing searched</h1>")
//	}
//	res.send(`<h1>search results for query ${q}</h1>`)
//})
////app.get('/apple',(req,res)=>{
////	res.send("You contacted apple path")
////})


////app.get('/orange',(req,res)=>{
////	res.send("You contacted orange path")
////})
//// app.post('/',(req,res)=>{
////	res.send("you sent a post request to root path")
//// }
//// )
////app.use((req,res)=>{
////	console.dir("request received");
////	//res.send({
////	//	name : "Apple",
////	//	color: "red",
////	//	taste: "sweet",
////	//	shape: "round",
////	//});
////	let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>";
////	res.send(code);
////})
//app.get("/:username/:id",(req,res)=>{
//	let {username,id} = req.params;
	
//	res.send(`welcome to the page of @${username}`);
//})

app.get("/search",(req,res)=>{
	let {q} = req.query;
	if(!q){
		res.send("<h1>nothing searched</h1>");
		return;
	}
	res.send(`search results for query ${q}`);
})