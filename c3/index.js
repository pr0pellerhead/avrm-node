const express = require('express');
const handlers = require('./hanlers');
const bodyParser = require('body-parser');

// application object
let app = express();

// adding middleware
app.use(bodyParser.urlencoded({extended: true}));

// route
app.get("/", handlers.index);
app.post("/", handlers.post);
app.get("/pero", handlers.pero);
app.get("/ime/:name", handlers.name);
app.get("/calc/:op/:a/:b", handlers.calc);

// starter
app.listen(8080, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Started server on port 8080');
});