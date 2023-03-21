// Importando a database
const database = require("./../database")

// Exportando a função
exports.buscar_nome = (valores) => {
    // Select pegando o nome que for igual a valores
    const query = "SELECT * FROM cervejas WHERE nome=$1"
    // Realizando a query passando de paramentros o select e valores
    return database.query(query, valores)
  }

// Exportando a função
exports.buscar_nacionalidade = (valores) => {
    // Select pegando a nacionalidade que for igual a valores
    const query = "SELECT * FROM cervejas WHERE nacionalidade=$1"
    return database.query(query, valores)
  }

// Exportando a função
exports.ordenar_abv = () => {
    // Select ordenando as cervejas por abv de maior para menor
    const query = "SELECT * FROM cervejas ORDER BY abv DESC;"
    return database.query(query)
  }

// Exportando a função
exports.buscar_tipo = (valores) => {
    // Select pegando o tipo que for igual a valores
    const query = "SELECT * FROM cervejas WHERE tipo=$1;"
    return database.query(query, valores)
  }

// Exportando a função
exports.buscar_nome_parcial = (valores) => {
    // Select pegando o nome que conter o que esta em valores
    const query = `SELECT * FROM cervejas WHERE nome LIKE '%${valores}%' `
    return database.query(query)
  }