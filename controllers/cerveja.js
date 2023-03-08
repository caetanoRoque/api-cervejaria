const database = require("../database")

exports.buscar_nome = (req,res) => {
    const query = "SELECT * FROM cervejas WHERE nome=$1"
    const values = [req.params.id]
    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({cerveja: resultado.rows})
        },(erro) => {
            res.status(500).send({erro: erro})
        }
    )
}

exports.buscar_nacionalidade = (req,res) => {
    const query = "SELECT * FROM cervejas WHERE nacionalidade=$1"
    const values = [req.params.id]
    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({cervejas: resultado.rows})
        },(erro) => {
            res.status(500).send({erro: erro})
        }
    )
}

exports.ordenar_abv = (req,res) => {
    const query = "SELECT * FROM cervejas ORDER BY abv DESC;"
    database.query(query).then(
        (resultado) => {
            res.status(200).send({cervejas: resultado.rows})
        },(erro) => {
            res.status(500).send({erro: erro})
        }
    )
}

exports.buscar_tipo = (req,res) => {
    const query = "SELECT * FROM cervejas WHERE tipo=$1"
    const values = [req.params.id]
    database.query(query, values).then(
        (resultado) => {
            res.status(200).send({cervejas: resultado.rows})
        },(erro) => {
            res.status(500).send({erro: erro})
        }
    )
}

exports.buscar_nome_parcial = (req,res) => {
    const query = `SELECT * FROM cervejas WHERE nome LIKE '%${req.params.id}%' `
    database.query(query).then(
        (resultado) => {
            res.status(200).send({cervejas: resultado.rows})
        },(erro) => {
            res.status(500).send({erro: erro})
        }
    )
}