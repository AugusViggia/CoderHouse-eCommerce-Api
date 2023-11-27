const express = require("express");
const cors = require("cors");
const Mercado_Pago = require("./router/routes");


const server = express();

// middlewares
server.use(cors());
server.use(express.json());
server.use("/Mercado_Pago", Mercado_Pago);

module.exports =  server;