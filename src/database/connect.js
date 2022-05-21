const DATABASE = require('mongoose');
const URL = "mongodb://sdp:000000@120.78.210.9/node_test";
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
