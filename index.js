const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
  {
    username: 'Tood',
    comment: 'lol funny!'
  },
  {
    username: 'Skyler',
    comment: 'I like to go birdwatching'
  },
  {
    username: 'Sk8boi',
    comment: 'Please delete you account'
  },
  {
    username: 'onlyme',
    comment: 'me me me'
  }

]

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
  res.render('comments/new')
})

app.post('/comments', (req, res) => {

  console.log(req.body)
  res.send('it worked')
})


app.get('/tacos', (req, res) => {
  res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
  const { meat, qty } = req.body;
  res.send(`ok, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
  console.log("ON PORT 3000!")
})