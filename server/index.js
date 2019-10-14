/*
 * Koneksi Nodejs dengan MongoDB menggunakan Mongoose
 *
 * Author By IvanDjoh
 * https://ivandjoh.com/
 *
 * License :  Free!!!
 */


const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      path = require('path');

// Server Initialization
const app = express();

app.configure(() => {
    app.use(express.logger());

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT','DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');

        if('OPTION' == req.method){
            res.send(200);
        }
        else {
            next();
        }
    })
    app.use(express.bodyParser());
    app.use(express.methodOve)
})