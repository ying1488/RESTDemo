const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
  {
    id: 1,
    username: 'Tood',
    comment: 'lol funny!'
  },
  {
    id: 2,
    username: 'Skyler',
    comment: 'I like to go birdwatching'
  },
  {
    id: 3,
    username: 'Sk8boi',
    comment: 'Please delete you account'
  },
  {
    id: 4,
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

app.get('/comments/:id', (rer, res) => {
  const { id } = req.params;
  comments.find(c => c.id === id)
})


app.listen(3000, () => {
  console.log("ON PORT 3000!")
})