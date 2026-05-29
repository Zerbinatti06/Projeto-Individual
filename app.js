// var ambiente_processo = 'producao';
var ambiente_processo = 'producao';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var usuarioRouter = require("./src/routes/usuarios");
var quizRouter = require("./src/routes/quiz");
var playRouter = require("./src/routes/play")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuarios", usuarioRouter);
app.use("/quiz", quizRouter);
app.use("/play", playRouter);

app.listen(PORTA_APP, function () {
    console.log(`
  /$$      /$$ /$$$$$$$$ /$$$$$$$                      /$$$$$$$   /$$$$$$  /$$$$$$$$ /$$$$$$                      /$$    /$$ /$$$$$$ /$$$$$$$$
| $$  /$ | $$| $$_____/| $$__  $$                    | $$__  $$ /$$__  $$|__  $$__//$$__  $$                    | $$   | $$|_  $$_/|_____ $$ 
| $$ /$$$| $$| $$      | $$  \ $$                    | $$  \ $$| $$  \ $$   | $$  | $$  \ $$                    | $$   | $$  | $$       /$$/ 
| $$/$$ $$ $$| $$$$$   | $$$$$$$        /$$$$$$      | $$  | $$| $$$$$$$$   | $$  | $$$$$$$$       /$$$$$$      |  $$ / $$/  | $$      /$$/  
| $$$$_  $$$$| $$__/   | $$__  $$      |______/      | $$  | $$| $$__  $$   | $$  | $$__  $$      |______/       \  $$ $$/   | $$     /$$/   
| $$$/ \  $$$|  $$     | $$  \ $$                    | $$  | $$| $$  | $$   | $$  | $$  | $$                      \  $$$/    | $$    /$$/    
| $$/   \  $$| $$$$$$$$| $$$$$$$/                    | $$$$$$$/| $$  | $$   | $$  | $$  | $$                       \  $/    /$$$$$$ /$$$$$$$$
|__/     \__/|________/|_______/                     |_______/ |__/  |__/   |__/  |__/  |__/                        \_/    |______/|________/
                                                                                                                                             
                                                                                                                                             
Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://${HOST_APP}:${PORTA_APP} `);
});
