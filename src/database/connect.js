const DATABASE = require('mongoose');
const username = '';
const password = '';
const ip = '';
const path = '';
const URL = `mongodb://${username}:${password}@${ip}/${path}`;
DATABASE.connect(URL, {
  authSource: 'admin'
})
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch(() => {
    console.log("MongoDB Connect Error!");
  })


module.exports = DATABASE;
