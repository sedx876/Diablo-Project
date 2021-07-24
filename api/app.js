const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const chalk = require('chalk')
const colors = require('colors')

dotenv.config()

mongoose.connect(
	process.env.MONGO_URI,
	{useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.table('DB Connected'.brightMagenta.inverse))

mongoose.connection.on('error', err => {
  console.table(`DB connection error: ${err.message}`)
})

const morganMiddleware = morgan(function (tokens, req, res) {
  return [
    '\n\n\n',
    chalk.hex('#ff4757').bold('💩🍄💩  Morgan --> '),
    chalk.hex('#34ace0').bold(tokens.method(req, res)),
    chalk.hex('#ffb142').bold(tokens.status(req, res)),
    chalk.hex('#ff5252').bold(tokens.url(req, res)),
    chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
    chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
    chalk.yellow(tokens['remote-addr'](req, res)),
    chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
    chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
    '\n\n\n',
  ].join(' ')
})

app.use(morganMiddleware)

const port = process.env.PORT || 8080

app.listen(port, () => 
{console.log(`NODE API is listening on port ${port}`.brightCyan.inverse)})