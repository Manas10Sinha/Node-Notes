const http = require("http"); //importing nodejs core modules
const fs = require("fs");
const server = http.createServer((req, res) => {
  //function call back
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>Enter your Details:");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br>'
    );
    res.write('<label for="male">MALE</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="female">FEMALE</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female"><br>'
    );
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end(); //important to return the end()
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    fs.writeFileSync("user.txt", "Manas Sinha SWE at Atlassian");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  } /*else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>Manas Sinha Software Engineer at Amazon</body>");
    res.write("<html>");
    return res.end();
  }*/
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
