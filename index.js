const { json } = require('body-parser');
const express = require('express');
const app = express();
const i18n = require('express-tongue');

app.use(i18n.localize({ 
    endpointEnabled: true, 
    path: __dirname + '/lang', 
    queryStringEnabled: true
}));

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.status(200).render('main',{ loc : res.locals.i18n});
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (req,res) => {
    console.log(`Server listening at port ${PORT}`);
});

