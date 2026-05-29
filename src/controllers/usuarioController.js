const { response } = require("express");
var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json(resultadoAutenticar[0]);
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
        return;
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
        return;
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
        return;
    }     

    usuarioModel.autenticar(email, senha)
        .then((resultado) => {
            if(resultado.length > 0){
                console.log(resultado);
                throw new Error()
            }
            usuarioModel.cadastrar(nome, email, senha)
                .then(
                    function (resultado) {
                        res.json(resultado);
                    }
                ).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                    }
                );
        }).catch((err) => {
            res.status(500)
            res.json({
                "message":"Usuário já existe!"
            })
        })

}

function getQuizzes(req, res){
    var id = req.params.id;

    if(id == undefined){
        res.send.status(400).message("Seu id está undefined");
    }

    usuarioModel.getQuizzes(id)
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err.sqlMessage);
        })
}

function getTotalPoints(req, res){
    let id = req.params.id;

    usuarioModel.getTotalPoints(id)
        .then(response => {
            res.status(200)
            res.send(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err.sqlMessage);
        })
}

function getGlobalRanking(req, res){
    let id = req.params.id;

    usuarioModel.getGlobalRanking(id)
        .then(response => {
            res.status(200);
            res.send(response);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err.sqlMessage)
        })
}

function getAllGLobalRanking(req, res){
    usuarioModel.getAllGLobalRanking()
        .then(response => {
            res.status(200);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send("Erro ao pegar ranking global")
        })
}

function getUserRanking(req, res){
    let userId = req.params.id;

    usuarioModel.getUserRanking(userId)
        .then(response => {
            res.status(200);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send("Erro ao buscar ranking de usuario")
        })
}   

function getDificultyRights(req, res){
    let userId = req.params.id;

    usuarioModel.getDificultyRights(userId)
        .then(response => {
            res.status(200);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send("Erro ao pegar acertos por dificuldade")
        })
}

function getThemeRights(req, res){
    let userId = req.params.id;

    usuarioModel.getThemeRights(userId)
        .then(response => {
            res.status(200);
            res.send(response)
        })
        .catch(err => {
            res.status(500).send("Erro ao pegar desempenho por tema")
        })
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
}