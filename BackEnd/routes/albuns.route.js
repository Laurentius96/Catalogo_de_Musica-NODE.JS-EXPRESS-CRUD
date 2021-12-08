/**
 * Arquivo: Local onde vai ficar as rotas da aplicação ou seja os Endpoint [Get/Post/Put/Delete]
 *
 */

const express = require("express"); // 8°) Importando o express para poder trabalhar com as rotas...

const router = express.Router(); // 9°) Inicializa o módulo de rostas do express (mostra que aqui é local de rotas)...

const albunsController = require("../controllers/albuns.controller"); // 15°) Importando as funções do controllers...

router.get("/", albunsController.getAlbuns); // 16°) [GET] /albuns = retorna uma lista de álbuns de música...

router.get("/:id", albunsController.getAlbunsById); // 17°) [GET] /albuns/{id} = retorna um álbum de música de acordo com o seu ID...

router.post("/add", albunsController.postAlbum); // 25°) [POST] /albuns/add = adiciona um novo álbum no catálogo de acordo com o objeto recebido pelo Front-End..

module.exports = router; // 10°) Exporta as rotas para serem utilizadas no index...
