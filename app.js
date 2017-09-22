var express = require('express')
var app = express()
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// var reviews = [
//   { title: "Great Review" },
//   { title: "Next Review" },
//   { title: "Okay Review"}
// ]
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes');


var Review = mongoose.model('Review', {
  title: String,
  movieTitle: String,
  description: String,
  rating: Number
});

app.get('/', function (req, res) {
  Review.find(function(err, reviews) {
    res.render('reviews-index', {reviews: reviews});
  })
})

app.post('/reviews', function (req, res) {
  console.log(req.body);
  res.redirect('/')
})
// NEW
app.get('/reviews/new', function (req, res) {
  res.render('reviews-new', {});
})

app.listen(3000, function () {
  console.log('Portfolio App listening on port 3000!')
})
