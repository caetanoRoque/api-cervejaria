const express = require("express")
const router = express.Router()
const models = require("../controllers/cerveja.js")
// const controller = require("./../controllers/batalhar")

router.get("/buscar-nome/:id", models.buscar_nome)
router.get("/buscar-nacionalidade/:id", models.buscar_nacionalidade)
router.get("/ordenar", models.ordenar_abv)
router.get("/buscar-tipo/:id", models.buscar_tipo)
router.get("/buscar-nome-parcial/:id", models.buscar_nome_parcial)
// router.post("/", controller.post)


module.exports = router