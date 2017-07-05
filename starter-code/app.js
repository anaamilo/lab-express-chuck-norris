const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/random', (req, res) => {
  client.getRandomJoke()
    .then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
  });
});

app.listen(3000, () => {
  console.log("App is running!");
})
