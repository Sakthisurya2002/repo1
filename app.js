const express = require('express')
const app = express()

app.get('/gadgets', (request, response) => {
  response.sendFile('./coding-practise-3b/gadgets.html', {root: __dirname})
})

module.exports = app
