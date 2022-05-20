const express = require("express");
const RSP_TEMP = require("../template/ResponseTemplate.js");
const Mock = require('mockjs');
const { desc } = require("../template/ResponseTemplate.js");
const Device = express.Router();
Device.use(express.json());
Device.use(express.urlencoded({extended: false}));

Device.get('/cabinet', (req,rsp) => {
  const { uuid } = req.query;
  if(uuid){
    const fake = Mock.mock({
      'temperature|20-60.2': 26,
      'totalCapacity': 42,
      'usedCapacity|0-42': 30,
      'power|6-15': 15,
    })
    
    rsp.status(200).send({
      code : 0,
      desc : '请求成功',
      data : fake,
    })
  }
  else{
    rsp.status(400).send({
      code: '0',
      desc: '参数错误'
    })
  }
})
Device.get('/allCabinet', (req,rsp) => {
  
})
Device.get('/battery', (req,rsp) => {
  const { uuid } = req.query;
  if(uuid){
    const fake = Mock.mock({
      'current|0-500': 26,
      'total|500-699': 600,
      'state|1': [-1,0,1],
      'default': 699,
    })
    rsp.status(200).send({
      code : 0,
      desc : '请求成功',
      data : fake,
    })
  }
  else{
    rsp.status(400).send({
      code: '0',
      desc: '参数错误'
    })
  }
})
Device.get('/allBattery', (req,rsp) => {
  
})
Device.post('/setBatteryState', (req,rsp) => {
  const { uuid, state } = req.body;
  if(uuid && state){
    rsp.status(200).send({
      code: 0,
      msg: '设置电池模式成功',
      desc: '请求成功',
      data: {
        result: 'success'
      }
    })
  }
  else{
    rsp.status(400).send({
      code: '0',
      desc: '参数错误'
    })
  }
})
Device.get('/aircondition', (req,rsp) => {
  const { uuid } = req.query;
  if(uuid){
    const fake = Mock.mock({
      'temperature|16-31': 21,
      'power|10-15': 10,
    })
    rsp.status(200).send({
      code : 0,
      desc : '请求成功',
      data : fake,
    })
  }
  else{
    rsp.status(400).send({
      code: '0',
      desc: '参数错误'
    })
  }
})
Device.get('/allAircondition', (req,rsp) => {})
Device.post('/setTemperature', (req,rsp) => {
  const { uuid, temper } = req.body;
  if(uuid && temper){
    rsp.status(200).send({
      code: 0,
      msg: '设置温度成功',
      desc: '请求成功',
      data: {
        result: 'success'
      }
    })
  }
  else{
    rsp.status(400).send({
      code: '0',
      desc: '参数错误'
    })
  }
})
Device.get('/light', (req,rsp) => {
  const { uuid } = req.query;
  if(uuid){
    const fake = Mock.mock({
      'open|1': true,
      'power|1-3.2': 2,
    })
    rsp.status(200).send({
      code : 0,
      desc : '请求成功',
      data : fake,
    })
  }
  else{
    rsp.status(400).send({
      code: '0',
      desc: '参数错误'
    })
  }
})
Device.get('/allLight', (req,rsp) => {})
Device.get('/openLight', (req,rsp) => {
  const { uuid, open } = req.body;
  if(uuid && open){
    rsp.status(200).send({
      code: 0,
      msg: '设置温度成功',
      desc: '请求成功',
      data: {
        result: 'success'
      }
    })
  }
  else{
    rsp.status(400).send({
      code: '0',
      desc: '参数错误'
    })
  }
})



module.exports = Device;