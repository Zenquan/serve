const test = require('ava');
const file = require('../../util/file');
const { staticPathTest, isBuffer } = require('./tools');

test('file', t => {
  const result = file(`${staticPathTest}/pic.png`)
  t.deepEqual(isBuffer(result), true);
})