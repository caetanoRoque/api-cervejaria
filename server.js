const express = require("express")
const bodyParser = require("body-parser")
const port = 3000
// Importando o arquivo cerveja.js da pasta routes 
const cervejaRoutes = require("./routes/cerveja.js")


const app = express()
app.use(bodyParser.json())
// Definindo os endpoints
app.use("/", cervejaRoutes)

// Informa que o servidor está ativo
app.listen(port,()=>{
    console.log("Servidor express rodando na porta 3000!")
})