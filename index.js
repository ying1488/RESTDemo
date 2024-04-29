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
  const { username, comment } = req.body;
  comments.push({ username, comment })
  res.redirect('/comments');
})


app.listen(3000, () => {
  console.log("ON PORT 3000!")
})