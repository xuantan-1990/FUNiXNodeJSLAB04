const fs = require("fs");

const requestHandler = (req, res) => {
        const url = req.url;
        const method = req.method;
if (url === "/") {
  res.write("<html>");
  res.write("<head><title>Enter Message</title></head>");
  res.write(
    "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
  );
  res.write("</html>");
  return res.end();
}

if (url === "/message" && method === "POST") {
  const body = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
  });
  return req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    const message = parsedBody.split("=")[1];
    fs.writeFile("message.txt", message, (err) => {
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  });
}
res.setHeader("Content-Type", "text/html");
res.write("<html>");
res.write("<head><title>My First NodeJS Page</title></head>");
res.write("<body><h1>Hello from my Node.js server!</h1></body>");
res.write("</html>");
res.end();

}

//chỉ có 1 hàm trong đối tượng xuất ra
module.exports = requestHandler;

//có nhiều hàm
/* CÁCH 1
module.exports ={
handler: requestHandler,
someText: 'some code'
} 
*/

/* CÁCH 2
module.exports.handler = requestHandler
module.exports.SomeText = 'some code'
*/

/* CÁCH 3
exports.handler = requestHandler
exports.SomeText = 'some code'
*/