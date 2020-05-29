const express = require('express')

// to be able to use path tools
const path = require('path')

const app = express()

const bodyParser = require('body-parser')
// middleware
const logger = require(path.join(__dirname, 'middleware', 'logger'))

// using middleware
app.use(logger)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// set up static folder
app.use(express.static(path.join(__dirname, 'public')))

// users API routes
app.use('/api/users/', require(path.join(__dirname, 'routes', 'api', 'usersRoutes')))

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// notes
// middleware = functions that have access to req and res and can be used to change things
