const test = require('ava');
const react = require('react');
const render = require('react-test-renderer');
const dir = require('../../util/dir');
const { staticPathTest } = require('./tools');

test('dir', t => {
  const result = dir('/', staticPathTest);
  console.log('result>>>', result);
  // const Result = () => result;
  // const tree = render.create(<Result/>).toJSON();
  // t.snapshot(tree);
  t.pass();
})