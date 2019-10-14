const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// initialization
const app = express();

// Middleware for depedencies
app.use(bodyParser.json());
app.use(cors());

// create port
const port = process.env.PORT || 5000;

app.listen(port, function(){
    console.log(`Server Running on Port : ${port}`)
});