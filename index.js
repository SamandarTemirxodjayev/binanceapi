const { Spot } = require('@binance/connector')
const apiKey = 'p5DUGzmBYoBQ0w4NsUeyJpmpQKvzj362LJ2atw0sCWuoW2atugYlffooiAVwo2Ir'
const apiSecret = 'dcfvUiCGiy1rVsUQVWWjlWIifKZzEd31xvI0ClOs1iBLopasFHNLI2KZ0RKaRHbM'
const client = new Spot(apiKey, apiSecret)

const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.json(client.account().then(response => client.logger.log(response.data)))
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})