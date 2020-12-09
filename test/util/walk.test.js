const test = require('ava');
const walk = require('../../util/walk');
const { staticPathTest } = require('./tools');

test('walk', t => {
  const result = walk(staticPathTest);
  t.deepEqual(result, [
    'css',         'dist',
    'favicon.ico', 'img',
    'index.html',  'js',
    'pic.png',     'test.html',
    'uploads'
  ]);
});