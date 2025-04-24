const http = require("http"); //importing nodejs core modules

const server = http.createServer((req, res) => {
  //function call back
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>Manas Sinha Software Engineer at Google</body>");
    res.write("<html>");
    return res.end(); //important to return the end()
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>Manas Sinha Software Engineer at Amazon</body>");
    res.write("<html>");
    return res.end();
  }
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
