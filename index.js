const express = require('express')

const app = express();


app.get('/', (req, res) => {

  res.send("<h1> Hello world....!")
})
app.listen(4000, () => {
  console.log( 'server started at port 4000')
})