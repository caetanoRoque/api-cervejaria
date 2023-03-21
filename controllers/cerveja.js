// Importando cerveja do models
const Cerveja = require('../models/cerveja')


exports.buscar_nome = (req, res) => {
  // Pegando o valor passado pela url
  const valores = [req.params.id];

  // Chamando a função buscar_nome do models e passando valores de parâmetro
  Cerveja.buscar_nome(valores)
  // Então se der certo exibir o resultado
    .then((resultado) => {
      res.status(200).send({ cerveja: resultado.rows })
    })
  // Se der errado diga qual erro que deu
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.buscar_nacionalidade = (req, res) => {
  // Pegando o valor passado pela url
  const valores = [req.params.id];

  // Chamando a função buscar_nacionalidade do models e passando valores de parâmetro
  Cerveja.buscar_nacionalidade(valores)
    .then((resultado) => {
      res.status(200).send({ cervejas: resultado.rows })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.ordenar_abv = (req, res) => {
  // Chamando a função ordenar_abv do models
  Cerveja.ordenar_abv()
    .then((resultado) => {
      res.status(200).send({ cervejas: resultado.rows })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.buscar_tipo = (req, res) => {
  // Pegando o valor passado pela url
  const valores = [req.params.id];

  // Chamando a função buscar_nacionalidade do models e passando valores de parâmetro
  Cerveja.buscar_tipo(valores)
    .then((resultado) => {
      res.status(200).send({ cervejas: resultado.rows })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}

exports.buscar_nome_parcial = (req, res) => {
  // Pegando o valor passado pela url
  const valores = [req.params.id];
  
  // Chamando a função buscar_nome_parcial do models e passando valores de parâmetro
  Cerveja.buscar_nome_parcial(valores)
    .then((resultado) => {
      res.status(200).send({ cervejas: resultado.rows })
    })
    .catch((erro) => {
      res.status(500).send({ erro: erro });
    })
}