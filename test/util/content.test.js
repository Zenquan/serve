const test = require('ava');
const koa = require('koa');
const { staticPathTest } = require('./tools');
const content = require('../../util/content');

test('content', t => {
  t.pass();
  // const app = new koa();
  // app.use(async (ctx, next) => {
  //   // let _content = await content(ctx, `${staticPathTest}/pic.png`);
  //   // console.log('>>>', `${staticPathTest}/pic.png`);
  //   // console.log('>>>', _content);
  // });

  // app.listen(5200, () => {
  //   console.log(`this app is running on 5200`);
  // });
});