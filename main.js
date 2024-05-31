const express = require('express')
const app = express()
const port = 4000

//route
app.get('/hi', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})