const express = require('express')

const app = express();


app.get('/', (req, res) => {

  res.send("<h1> Hello....!")
})

app.get('/hey', (req, res) => {
  res.send("<h1> different branch")
})
app.listen(4000, () => {
  console.log( 'server started at port 4000')
})