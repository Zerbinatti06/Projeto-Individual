var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/getQuizzes/:id", (req, res) => {
    usuarioController.getQuizzes(req, res);
});

router.get("/getTotalPoints/:id", (req, res) => {
    usuarioController.getTotalPoints(req, res);
})

router.get("/getGlobalRanking/:id", (req, res) => {
    usuarioController.getGlobalRanking(req, res);
})

router.get("/getAllGlobalRanking", (req , res) => {
    usuarioController.getAllGLobalRanking(req, res);
})

router.get("/getUserRanking/:id", (req, res) => {
    usuarioController.getUserRanking(req, res);
})

router.get("/getDificultyRights/:id", (req, res) => {
    usuarioController.getDificultyRights(req, res);
})

router.get("/getThemeRights/:id", (req, res) => {
    usuarioController.getThemeRights(req, res);
})

module.exports = router;