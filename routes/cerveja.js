const express = require("express")
const router = express.Router()
// Importando o arquivo cerveja.js da pasta controllers 
const controllers = require("../controllers/cerveja.js")

// Definindo o endpoint de buscar pelo nome
router.get("/buscar-nome/:id", controllers.buscar_nome)
// Definindo o endpoint de buscar pela nacionalidade
router.get("/buscar-nacionalidade/:id", controllers.buscar_nacionalidade)
// Definindo o endpoint de ordenar por abv
router.get("/ordenar", controllers.ordenar_abv)
// Definindo o endpoint de buscar por tipo da cerveja
router.get("/buscar-tipo/:id", controllers.buscar_tipo)
// Definindo o endpoint de buscar pela parcial do nome
router.get("/buscar-nome-parcial/:id", controllers.buscar_nome_parcial)

// Exportando o router
module.exports = router