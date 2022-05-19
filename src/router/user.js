const express = require("express");

const User = express.Router();
User.use(express.json());
User.use(express.urlencoded({extended: false}));
User.get('/register', (req,rsp) => {})
User.get('/login', (req,rsp) => {})
User.get('/delete', (req,rsp) => {})
User.get('/updateConfig', (req,rsp) => {})
User.get('/resetConfig', (req,rsp) => {})

module.exports = User;