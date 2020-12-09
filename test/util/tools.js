const test = require('ava');
const path = require('path');
const { staticPath } = require('../../config');

const staticPathTest = path.join(__dirname, '../..', staticPath);

const isBuffer = (str) => {
  return str && typeof str === "object" && Buffer.isBuffer(str)
}

module.exports = {
  staticPathTest,
  isBuffer
}

test('foo', t => {
  t.pass();
})