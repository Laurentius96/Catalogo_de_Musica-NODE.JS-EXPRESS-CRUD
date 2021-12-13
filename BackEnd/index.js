/**
 * Arquivo: Permite o uso do cors criação da porta  uso do json
 *
 */

const express = require("express"); // 1°) Importa o express para que seja possivel utilizar as suas funções na aplicação...

const cors = require("cors"); // 6°) Impostando a lib cors...

const app = express(); // 2°) Inicializa o express no nosso arquivo JavaSript para que ele possa assumir as funções do express...

app.use(cors()); // 6.1°) CORS - permite a troca de recursos entre origens diferentes. Usando as funções do express...

app.use(express.json()); // 3°) É dito para o express trabalhar com middleware de Jason para trabalharmos com o formato JSON...

const albunsRouter = require("./routes/albuns.route"); // 7°) Importando o arquivo de rotas...

app.use("/albuns", albunsRouter); // 11°) É dito para o Back-End usar as rotas para o Endpoint (/albuns)...

const port = 3000; // 4°) Definindo a porta que o Back-End o irá executar...

app.listen(port, () => {
  // 5°) Inicializa o servidor na porta...
  console.log(`App Rodando na Porta: ${port}`);
});
