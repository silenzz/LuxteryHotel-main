const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');
const port = 3000;

app.engine(
    'hbs',
    hbs.engine({
        extname: 'hbs',
        helper: {},
    }),
);

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', function(req, res) {
    res.render('home');
});
app.get('/intro', function(req, res) {
    res.render('intro');
});
app.get('/room', function(req, res) {
    res.render('room');
});
app.get('/event', function(req, res) {
    res.render('event');
});

app.get('/facilities', function(req, res) {
    res.render('facilities');
})

app.get('/reviews', function(req, res) {
    res.render('reviews');
})

app.get('/event/astra', function(req, res) {
    res.render('astra');
})

app.get('/event/meeting', function(req, res) {
    res.render('meeting');
})

app.get('/event/ownway', function(req, res) {
    res.render('ownway');
})

app.listen(port, () => {
    console.log(`
              Example app listening on http://localhost:${port}
              `);
});