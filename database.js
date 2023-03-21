const pg = require("pg")

// Importando a URl do banco de dados
const database = new pg.Client("postgres://pxblphjw:QDcJd6pt10oYD2gL_uznqLd2lVM2sLUJ@babar.db.elephantsql.com/pxblphjw")

// Condicionando a conexão do banco de dados com a API
database.connect((erro)=>{
    if (erro) {
        return console.log("Não foi possível se conectar com o ElephantSQL" , erro)
    }else{
        return console.log("Conectado ao ElephantSQL!")
    }
})

// Exportando o database
module.exports = database