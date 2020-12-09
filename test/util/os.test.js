const test = require('ava');
const { getIpAddress } = require('../../util/os');

test('IPAddress', t => {
  const netIp = getIpAddress();
  t.deepEqual(netIp, '10.99.4.9');
});