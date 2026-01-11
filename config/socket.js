const { Server } = require("socket.io");
const registerMeetingSocket = require("../sockets/meeting.socket");

module.exports = (server) => {
  const io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("🟢 Socket connected:", socket.id);
    registerMeetingSocket(io, socket);
  });
};