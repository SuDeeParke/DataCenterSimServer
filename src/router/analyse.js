const express = require("express");

const Analyse = express.Router();
Analyse.use(express.json());
Analyse.use(express.urlencoded({extended: false}));
Analyse.get('/getElectricPrice', (req,rsp) => {
  console.log(req.query);
  rsp.status(200).send('getElectricPrice')
})
Analyse.get('/getTotalPowerUsed', (req,rsp) => {})

module.exports = Analyse;