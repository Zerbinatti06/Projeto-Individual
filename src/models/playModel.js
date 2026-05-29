let database = require("../database/config");

function registerPlay(userId, quizId, wrong, right){
    let columns = "userId, quizId, wrong, `right`"

    var instrucaoSql = `
        INSERT INTO play (${columns}) values (${userId}, ${quizId}, ${wrong}, ${right});
    `

    return database.executar(instrucaoSql);
}

function getLastPlay(){
    var instrucaoSql = `
        SELECT id FROM play ORDER BY startedAt DESC LIMIT 1;
    `

    return database.executar(instrucaoSql);
}

function registerPlayAnswer(playId, questionId, answerId){
    var instrucaoSql = `
        INSERT INTO play_answer (playId, questionId, answerId) values (${playId}, ${questionId}, ${answerId});
    `

    return database.executar(instrucaoSql);
}

module.exports = {
    registerPlay,
    registerPlayAnswer,
    getLastPlay,
}