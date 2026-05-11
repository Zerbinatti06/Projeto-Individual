var database = require("../database/config")

function create(userId, title){
    console.log("Executando inserção do quiz", title, "no userId", userId);

    var instrucaoSql = `
        INSERT INTO quiz (userId, title) values (${userId}, ${title});
    `
    database.executar(instrucaoSql);
}

function getAll(){
    console.log("Executando SELECT na tabela quiz")

    var instrucaoSql = `
        SELECT * FROM quiz;
    `

    database.executar(instrucaoSql);
}

module.exports = {
    create,
    getAll
}
