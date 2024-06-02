const express = require('express')
const app = express()  //object
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send ( " <h1 style = 'color:red' > This is my first express app </h1> " )
})

app.get('/theme/:c', (req, res) => {
  let clr=req.params.c;
  res.send(`<h2 style='color:${clr}'>Color Choice : ${clr}<h2>`)
})


app.get('/', (req, res) => {
  res.send('learning express')
})


app.post('/', (req, res) => {
  res.send('This is my post request app')
})

app.patch('/', (req, res) => {
  res.send('This is my put request app')
})

app.put('/', (req, res) => {
  res.send('This is my put request app')
})

app.delete('/', (req, res) => {
  res.send('This is my delete request app')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})