const express = require('express');
const path = require('path');
const Rollbar = require('rollbar');

const rollbar = new Rollbar( {
    accessToken: '83efd38be67d4eea85cf8c558d327f76',
    captureUncaught: true,
    captureUnhandledRejections: true
});
const app = express();

//middleware to use rollbar
app.use(rollbar.errorHandler());
//middleware to use json
app.use(express.json());


//middleware to access the html file
app.get('/', (req, res) => { res.sendFile(path.join(__dirname, "../public/index.html"))});

//middleware to access the css file
app.get('/stylesheet.css', (req, res) => { res.sendFile(path.join(__dirname, "../public/stylesheet.css"))});




const port = process.env.PORT || 4004;
app.listen(port, () => { console.log(`Server is running on ${port}`)});

rollbar.log("hello world!");