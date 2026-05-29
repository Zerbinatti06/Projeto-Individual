var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, name, email FROM user WHERE email = '${email}' AND password = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO user (name, email, password) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql); 
}

function getQuizzes(id){

    var instrucaoSql = `
        SELECT totalQuizes FROM totalQuizzes WHERE userId = ${id};
    `

    return database.executar(instrucaoSql);
}

function getTotalPoints(id){
    
    var instrucaoSql = `
        SELECT totalPoints FROM totalPoints WHERE userId = ${id};
    `

    return database.executar(instrucaoSql);
}

function getGlobalRanking(id){

    var instrucaoSql = `
        SELECT * FROM globalRanking where userId = ${id};
    `
    
    return database.executar(instrucaoSql);
}

function getAllGLobalRanking(){
    var instrucaoSql = `
        SELECT * FROM globalRanking order by rankingPosition limit 6;
    `

    return database.executar(instrucaoSql);
}

function getUserRanking(id){
    var instrucaoSql =`
        SELECT * FROM globalRanking WHERE userId = ${id}; 
    `

    return database.executar(instrucaoSql);
}  

function getDificultyRights(id){
    var instrucaoSql = `
        SELECT * FROM dificultyRights WHERE userId = ${id} ORDER BY quizDificulty;
    `

    return database.executar(instrucaoSql);
}

function getThemeRights(id){
    var instrucaoSql = `
        SELECT * FROM themeRights WHERE userId = ${id} ORDER BY quizTheme;
    `

    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrar,
    getQuizzes,
    getTotalPoints,
    getGlobalRanking,
    getAllGLobalRanking,
    getUserRanking,
    getDificultyRights,
    getThemeRights
};