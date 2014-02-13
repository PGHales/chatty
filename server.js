var messages=new Array();
messages[0]="Hello";
messages[1]="This website is awesome";
messages[2]="Cool messages"; 


onRequest = function(req, res){
	if (req.method === 'GET') {


		res.writeHead(200, {
			'Connection': 'close',
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});
		res.end(JSON.stringify(messages));
	}
	if (req.method === 'POST') {
		console.log("Post");
		var postData = '';
		req.on('data', function() {
			var msg = JSON.parse(postData);
			messages.push(msg);
			res.writeHead(200, {
				'Connection': 'close',
				'Content-Type': 'aplication/json',
				'Access-Control-Allow-Origin': '*'
			});
			res.end(JSON.stringify(messages));
		});
		req.on('data', function(chunk) {
			postData += chunk.toString();
		});
	}
	if (req.method === 'OPTIONS') {
    res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      });
    res.end("{}");
  }

http = require('http');
http.createServer(onRequest).listen(12200);

// var messages = [
// 	"welcome",
// 	"messages"
// ];


// grunt serve:test