const express = require("express");
const Mock = require("mockjs");
const analyse = require('./src/router/analyse');
const device = require('./src/router/device');
const user = require('./src/router/user');


const port = 8088
const server = express()

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use('/analyse', analyse)
server.use('/device', device)
server.use('/user', user)


server.post('/test', (req, res) => {
  console.log(req.body)
  res.status(200).send("hello world")
})
server.get('/api/test', (req, res) => {
  console.log(req.body)
  res.send("succeed!", 200)
})

server.get('/api/student', (req, res) => {
  console.log(req.body)
  res.send(
    Mock.mock({
      name: '@name',
      address: '@region',
      birthday: '@date',
      avatar: '@image',
      email: '@email',
      'grade|1-8': [
        {
          'chinese|1-100': 100,
          'math|1-100': 100,
          'english|1-100': 100,
          'physics|1-100': 100,
          'chemistry|1-100': 100,
          'biology|1-100': 100,
          'polity|1-100': 100
        }
      ]
    })
  )
})

server.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})