const test = require('ava');
const { parseMime } = require('../../util/mimes');
const { staticPathTest } = require('./tools');

test('parseMime', t => {
  const result = parseMime(`${staticPathTest}/pic.png`);
  t.deepEqual(result, 'image/png');
})