const http = require("http");
const app = require("./app");
const initSocket = require("./config/socket");

const server = http.createServer(app);
initSocket(server);

server.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});