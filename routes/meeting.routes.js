const router = require("express").Router();
const controller = require("../controllers/meeting.controller");

router.post("/create", controller.createMeeting);
router.post("/join", controller.joinMeeting);
router.post("/leave", controller.leaveMeeting);
router.post("/end", controller.endMeeting);

module.exports = router;