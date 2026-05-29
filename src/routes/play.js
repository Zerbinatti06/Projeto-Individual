var express = require("express");
var router = express.Router();

let playController = require("../controllers/playController")

router.post("/registerPlay", (req, res) => {
    playController.registerPlay(req, res);
})

router.get("/getLastPlay", (req, res) => {
    playController.getLastPlay(req, res);
})

router.post("/registerPlayAnswer", (req, res) => {
    playController.registerPlayAnswer(req, res);
})

module.exports = router;