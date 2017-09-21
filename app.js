var express = require('express')
var app = express()
var exphbs  = require('express-handlebars');
// var reviews = [
//   { title: "Great Review" },
//   { title: "Next Review" },
//   { title: "Okay Review"}
// ]
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes');

var Review = mongoose.model('Review', {
  title: String
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Index
app.get('/', function (req, res) {
    Review.find(function(err, reviews){
        res.render('reviews-index', {reviews: reviews});
    })
})

app.listen(3000, function () {
  console.log('Portfolio App listening on port 3000!')
})
