const express=require('express');
const app = express();





app.set('view engine','ejs');

app.get('/', function(req,res) {
      res.render('profile');      
});

app.get('/about', function(req,res) {
      res.render('about');
})
app.get('/service', function(req,res) {
      res.render('service');
})
app.get('/contact', function(req,res) {
      res.render('contact');
})
app.get('/signup', function(req,res) {
      res.render('signup');
})
app.get('/login', function(req,res) {
      res.render('login');
})

app.listen(4000);

