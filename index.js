const express = require('express')
const app = express()
const port = 4000
const nearPlase = require("./routers/nearPlace");

app.use('nearPlase', nearPlase);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  
})

