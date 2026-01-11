module.exports = (io, socket) => {

  socket.on("join-meeting", ({ meetingId, userId }) => {
    socket.join(meetingId);
    socket.to(meetingId).emit("user-joined", userId);
  });

  socket.on("leave-meeting", ({ meetingId, userId }) => {
    socket.leave(meetingId);
    socket.to(meetingId).emit("user-left", userId);
  });

  socket.on("end-meeting", ({ meetingId }) => {
    io.to(meetingId).emit("meeting-ended");
  });

};