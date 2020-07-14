var express = require('express')
var app = express();
// app.engine('html', require('ejs').renderFile);
// app.set('views', __dirname);
var path=require('path')

// set the view engine to ejs
app.set('view engine', 'ejs');


// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render("pages/index");
});

// Seller Diaries Page page 
app.get('/sellerdiaries', function(req, res) {
    res.render('pages/sellerdiaries');
});

// Stories page 
app.get('/ourstory', function(req, res) {
    res.render('pages/ourstory');
});

// Stories individual 
app.get('/storyindividual', function(req, res) {
    res.render('pages/storyindividual');
});

// Benifits page 
app.get('/benefits', function(req, res) {
    res.render('pages/benefits');
});

// app.get('/',function(req,res){
//     res.sendfile('index.html');
// })

app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000,()=>{
    console.log('Server Lisining on 3000')
})
