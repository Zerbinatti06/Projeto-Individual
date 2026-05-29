var quizModel = require('../models/quizModel');

function getAll(req, res){
    quizModel.getAll()
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send("Erro ao pesquisar quizzes")
        })
}


function getQuizbyTheme(req, res){
    var theme = req.body.theme;

    if(theme == undefined){
        res.status(401).send("Seu tema está undefined")
    }

    quizModel.getQuizbyTheme(theme)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("Erro ao pesquisar quizzes")
        })
}

function getQuestions(req, res){
    let id = req.params.id;

    if(id == undefined){
        res.status(401).send("seu quizId está undefined");
    }

    quizModel.getQuestions(id)
        .then(response => {
            res.json(response);
            res.status(200);
        })
        .catch(err => {
            console.log("Erro:" + err)
            res.status(500).send("Erro ao pesquisar Questions")
        })
}

function getQuiz(req, res){
    let id = req.params.id;

    if(id == undefined){
        res.status(401).send("seu quizId está undefined")
    }

    quizModel.getQuiz(id)
    .then(response => {
        res.json(response);
        res.status(200);
    })
    .catch(err => {
        console.log("Erro:" + err);
        res.status(500).send("Erro ao pesquisar Quiz");
    })
}

function getAnswers(req, res){
    let id = req.params.id;

    if(id == undefined){
        res.status(401).send("seu questionId está undefined")
    }

    quizModel.getAnswers(id)
        .then(response => { 
            res.json(response);
            res.status(200);
        })
        .catch(err => {
            console.log("Erro:" + err)
            res.status(500).send("Erro ao pesquisar Answers")
        })
}

module.exports = {
    getAll,
    getQuizbyTheme,
    getQuiz,
    getQuestions,
    getAnswers
}