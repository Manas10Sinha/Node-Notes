const http = require("http"); //importing nodejs core modules
/*
function requestListen(req, res) {
  console.log(req);
}

const server = http.createServer(requestListen);//function call back 
*/
const server = http.createServer((req, res) => {
  //function call back
  console.log(req);
  //process.exit(); //to exit the request after locking it
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server starting on address:http://localhost:${PORT}`);
});
