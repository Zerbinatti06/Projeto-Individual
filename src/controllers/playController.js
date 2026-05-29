let playModel = require("../models/playModel");

function registerPlay(req, res){
    let userId = req.body.userId;
    let quizId = req.body.quizId;
    let wrong = req.body.wrong;
    let right = req.body.right;

    if(userId == undefined) {res.send("seu userId está undefined")}
    if(quizId == undefined) {res.send("seu quizId está undefined")}
    if(wrong == undefined) {res.send("seu wrong está undefined")}
    if(right == undefined) {res.send("seu right está undefined")}

    playModel.registerPlay(userId, quizId, wrong, right)
    .then(response => {
        res.json(response);
        res.status(200)
    })
    .catch(err => {
        console.log(err);
        res.status(500).send("Erro ao inserir Play")
    })
}

function getLastPlay(req, res){
    playModel.getLastPlay()
    .then(response => {
        res.json(response);
        res.status(200)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send("Erro ao pegar ultima play")
    })
}

function registerPlayAnswer(req, res){
    let playId = req.body.playId;
    let questionId = req.body.questionId;
    let answerId = req.body.answerId;

    if(playId == undefined){res.send("seu playId está undefined")}
    if(questionId == undefined){res.send("seu questionId está undefined")}
    if(answerId == undefined){res.send("seu answerId está undefined")}

    playModel.registerPlayAnswer(playId, questionId, answerId)
    .then(response => {
        res.json(response)
        res.status(200)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send("Erro ao inserir play_answer")
    })
}

module.exports = {
    registerPlay,
    registerPlayAnswer,
    getLastPlay,
}