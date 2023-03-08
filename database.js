const pg = require("pg")

const database = new pg.Client("postgres://pxblphjw:QDcJd6pt10oYD2gL_uznqLd2lVM2sLUJ@babar.db.elephantsql.com/pxblphjw")

database.connect((erro)=>{
    if (erro) {
        return console.log("Não foi possível se conectar com o ElephantSQL" , erro)
    }else{
        return console.log("Conectado ao ElephantSQL!")
    }
})

module.exports = database