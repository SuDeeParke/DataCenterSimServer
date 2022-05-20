const express = require("express");
const  Mock  = require("mockjs");
const {decode} = require("../utils/util");

const User = express.Router();
User.use(express.json());
User.use(express.urlencoded({extended: false}));
User.post('/register', (req,rsp) => {
  const {
    name,
    phone,
    email,
    password
  } = req.body
  if(name && phone && email && password){
    // insert to database
    rsp.status(200).send({
      code: 0,
      msg: '注册成功',
      desc: '',
      data: {}
    })
  }
})
User.post('/login', (req,rsp) => {
  const {phone, password} = req.body
  console.log(password, decode(password))

  if(phone && password){
    // 数据库查询站户信息
    rsp.status(200).send({
      code: 0,
      msg: '登录成功',
      desc: '请求成功',
      data: {
        token: Mock.mock('@guid')
      }
    })
  }
  else{
    rsp.status(400).send({
      code: 1,
      msg: '账号或密码缺失',
      desc: '参数缺失',
      data: {}
    })
  }
})
User.post('/delete', (req,rsp) => {
  const {phone,token} = req.body
  if(phone && token){
    //数据库删除数据
    rsp.status(200).send({
      code:'0',
      mag: '参数错误',
      desc: '',
      data: {
        result: 'success'
      }
    })
  }
  else{
    rsp.status(400).send({
      code:'1',
      mag: '参数错误',
      desc: '',
      data: {}
    })
  }
})
User.post('/updateConfig', (req,rsp) => {
  const {config,token} = req.body
  if(config && token){
    //数据库更新数据
    rsp.status(200).send({
      code:'0',
      mag: '请求成功',
      desc: '',
      data: {
        result: 'success'
      }
    })
  }
  else{
    rsp.status(400).send({
      code:'1',
      mag: '参数错误',
      desc: '',
      data: {}
    })
  }
})
User.post('/resetConfig', (req,rsp) => {
  const {token} = req.body
  if(token){
    //恢复默认
    rsp.status(200).send({
      code:'0',
      mag: '请求成功',
      desc: '',
      data: {
        result: 'success'
      }
    })
  }
  else{
    rsp.status(400).send({
      code:'1',
      mag: '参数错误',
      desc: '',
      data: {}
    })
  }
})

module.exports = User;