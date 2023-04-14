
const express = require('express');
const server = express();
const router = require("../src/routes/indexRoutes")
const morgan = require("morgan")
const PORT = 3001;


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(express.json());
server.use(morgan("dev"));
server.use("/rickandmorty", router)

 server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

























/*const http = require("http");
//var data = require("./../Server/utils/data")
const getCharById = require("../../Server/src/controllers/getCharById")

const PORT = 3001;

module.exports =

http.createServer((req, res)=> {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.url.includes('/rickandmorty/character/')) {
        const url = req.url;
        const id = url.split('/').at(-1);   
        getCharById(res, id)}}).listen(PORT, "localhost")*/