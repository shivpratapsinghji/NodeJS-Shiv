const express=require('express');
const mongoose=require('mongoose');
const User=require('./models/user');
const app = express();
app.listen(4000, () => {
      console.log(`listening on port 4000.`);
    });
const db_Url='mongodb+srv://shivpratapsinghji1:Chauhan1998@cluster0.vsd9g.mongodb.net/shivdatabase?retryWrites=true&w=majority'

mongoose.connect(db_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
        User.find({},function(err,user){
        if(err)console.warn(err);
        console.warn(user);
  })


app.set('view engine','ejs');

app.use(express.static('publics'));

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



