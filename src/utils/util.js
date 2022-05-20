const decode = (str) => {
  return Buffer.from(str, 'base64').toString()
}
const encode = (str) => {
  return Buffer.from(str).toString('base64');
}

module.exports = {
  decode,
  encode
}