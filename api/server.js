const express = require("express");
const server = express();
const tarifRouter = require("./tarifler/tarif-router");

server.use(express.json());

server.use("/api/tarifler", tarifRouter);

/* server.get("/", (req, res) => {
  res.send("Başlıyruuuz");
}); */

module.exports = server;