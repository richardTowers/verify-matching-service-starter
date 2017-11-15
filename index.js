const server = require('express')()
const bodyParser = require('body-parser')
const port = 1337

server.use(bodyParser.json())

server.post('/match', (req, res) => {
  const matchingData = req.body
  console.log(matchingData)
  res.set('Content-Type', 'application/json')
  res.send(JSON.stringify({result: 'banana'}))
})

server.post('/create-user', (req, res) => {
  const matchingData = req.body
  console.log(matchingData)
  res.set('Content-Type', 'application/json')
  res.send(JSON.stringify({result: 'pear'}))
})

server.listen(port, () =>
  console.log(`Listening on port ${port}

URLs are:

http://localhost:${port}/match
http://localhost:${port}/create-user
`))

