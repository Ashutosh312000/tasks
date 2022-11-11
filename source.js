const express=require('express');

const bodyParser = require('body-parser');

const app=express();

const routes=require('./route.js')

app.use(bodyParser.urlencoded({extended: false}));
app.use(routes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);


