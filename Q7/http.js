const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const dto = new Date();
  const log = `${dto.toDateString()}: ${req.url} New Req Received \n`;
  fs.appendFile("client.txt", log, (err, data) => {
    res.end("Hello from server");
  });
});

server.listen(8000, () => {
  console.log("Server started");
});
