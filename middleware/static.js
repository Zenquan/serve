const path = require('path');
const convert = require('koa-convert');
const argv = require('minimist')(process.argv.slice(2));
const content = require('../util/content');
const {
  parseMime
} = require('../util/mimes');
const {
  staticPath
} = require('../config');

/**
 * 处理静态资源内容的中间件
 * @param {*} ctx 
 */
const static = async (ctx) => {
  // 静态资源目录在本地的绝对路径
  let fullStaticPath = path.join(__dirname, '..', argv['s'] ? argv['s'] : staticPath)

  console.log('fullStaticPath>>>', argv['s'], fullStaticPath);
  // 获取静态资源内容，有可能是文件内容，目录，或404
  let _content = await content(ctx, fullStaticPath)

  // 解析请求内容的类型
  let _mime = parseMime(ctx.url)

  // 如果有对应的文件类型，就配置上下文的类型
  if (_mime) {
    ctx.type = _mime;
  }

  // 输出静态资源内容
  if (_mime && _mime.indexOf('image/') >= 0) {
    // 如果是图片，则用node原生res，输出二进制数据
    ctx.res.writeHead(200)
    ctx.res.write(_content, 'binary')
    ctx.res.end()
  } else {
    // 其他则输出文本
    ctx.body = _content;
  }
}

module.exports = convert(static)