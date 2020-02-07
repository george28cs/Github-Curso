const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(__dirname + '/'))

app.get('/', (req, res)=>{
  res.sendFile('index.html')
})



app.listen(3000, ()=>{
  console.log(`App running on port 3000!`)
})