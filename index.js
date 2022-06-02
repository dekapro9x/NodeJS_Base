const express = require("express");
const server = express();
const routes = require('./src/route');
const cors = require("cors");
server.use(express.json());
server.use(cors());
server.use(routes);
server.listen(3000, function(){
    console.log('Connected Successfull!');
});

