let http = require("http");
let fs = require("fs");
let url = require("url");
let sw = require("./mm");
console.log(sw);

http.createServer(function(req,res){
	let {pathname,query}=url.parse(req.url,true);
	if(pathname==='/api/mm'){
		return res.end(JSON.stringify(sw))
	}
}).listen(3000);
