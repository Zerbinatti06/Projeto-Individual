var database = require("../database/config")

function getQuizbyTheme(theme){

    var instrucaoSql = `
        SELECT * FROM vwQuizzes WHERE theme = "${theme}";
    `
    return database.executar(instrucaoSql);
}

function getAll(){
    console.log("Executando SELECT na tabela quiz")

    var instrucaoSql = `
        SELECT * FROM vwQuizzes;
    `

    return database.executar(instrucaoSql);
}

function getQuiz(id){
    var instrucaoSql = `
        select * from vwQuizzes where id = ${id};
    `

    return database.executar(instrucaoSql);
}

function getQuestions(id){
    var instrucaoSql = `
        select * from vwQuestionQuiz where quizId = ${id};
    `

    return database.executar(instrucaoSql);
}

function getAnswers(id){
    var instrucaoSql = `
        select * FROM vwAnswersQuestionQuiz WHERE quizId = ${id};
    `

    return database.executar(instrucaoSql);
}

module.exports = {
    getQuizbyTheme,
    getAll,
    getQuiz,
    getQuestions,
    getAnswers,
}
