var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/getQuizbyTheme", (req, res) => {
    quizController.getQuizbyTheme(req, res);
})

router.get('/getQuiz/:id', (req, res) => {
    quizController.getQuiz(req, res);
})

router.get("/getAll", (req, res) => {
    quizController.getAll(req, res);
})

router.get("/getQuestions/:id", (req, res) => {
    quizController.getQuestions(req, res);
})

router.get("/getAnswers/:id", (req, res) => {
    quizController.getAnswers(req, res);
})

module.exports = router;