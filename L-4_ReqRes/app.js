const http = require("http"); //importing nodejs core modules

const server = http.createServer((req, res) => {
  //function call back
  console.log(`URL-${req.url}, method-${req.method},header-${req.headers}`);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body>Manas Sinha Software Engineer at Microsoft</body>");
  res.write("<html>");
  res.end();
  //process.exit(); //to exit the request after locking it
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server starting on address:http://localhost:${PORT}`);
});
