const express = require("express");
const RSP_TEMP = require("../template/ResponseTemplate.js");

const Device = express.Router();
Device.use(express.json());
Device.use(express.urlencoded({extended: false}));
Device.get('/cabinet', (req,rsp) => {
  const { uuid } = req.query;
  if(uuid){
    rsp.status(200).send(uuid)
  }
  else{
    RSP_TEMP.code = 1;
    RSP_TEMP.msg = '参数错误'
    rsp.status(400).send({
      RSP_TEMP
    })
  }
})
Device.get('/allCabinet', (req,rsp) => {
  
})
Device.get('/battery', (req,rsp) => {

})
Device.get('/allBattery', (req,rsp) => {

})
Device.get('/setBatteryState', (req,rsp) => {})
Device.get('/aircondition', (req,rsp) => {})
Device.get('/allAircondition', (req,rsp) => {})
Device.get('/setTemperature', (req,rsp) => {})
Device.get('/light', (req,rsp) => {})
Device.get('/allLight', (req,rsp) => {})
Device.get('/openLight', (req,rsp) => {})



module.exports = Device;