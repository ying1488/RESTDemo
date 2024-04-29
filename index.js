const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
  {
    id: uuid(),
    username: 'Tood',
    comment: 'lol funny!'
  },
  {
    id: uuid(),
    username: 'Skyler',
    comment: 'I like to go birdwatching'
  },
  {
    id: uuid(),
    username: 'Sk8boi',
    comment: 'Please delete you account'
  },
  {
    id: uuid(),
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
  comments.push({ username, comment, id: uuid() })
  res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id)
  res.render('comments/show', { comment })
})


app.listen(3000, () => {
  console.log("ON PORT 3000!")
})