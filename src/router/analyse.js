const express = require("express");

const Analyse = express.Router();
Analyse.use(express.json());
Analyse.use(express.urlencoded({extended: false}));
Analyse.get('/getElectricPrice', (req,rsp) => {})
Analyse.get('/getTotalPowerUsed', (req,rsp) => {})

module.exports = Analyse;