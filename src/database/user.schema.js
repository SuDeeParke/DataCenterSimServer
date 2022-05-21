const DATABASE = require('./connect');

const Schema = DATABASE.Schema;
const template = new Schema({
  name: String,
  sno: Number,
  grade: Number,
  personInfo: Object,
  update: Date
})

const Stu = DATABASE.model('Stu', template);
module.exports = Stu;
