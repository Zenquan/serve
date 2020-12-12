const path = require('path')
const fs = require('fs')

// 读取目录内容方法
const dir = require('./dir')
// 读取文件内容方法
const file = require('./file')

// 获取静态资源内容
async function content(ctx, fullStaticPath) {
  let reqPath = decodeURI(path.join(fullStaticPath, ctx.url));
  let exist = fs.existsSync(reqPath)
  let _content = ''
  if (!exist) {
    _content = '404 Not Found!'
  } else {
    let stat = fs.statSync(reqPath)
    if (stat.isDirectory()) {
      _content = dir(ctx.url, reqPath)
    } else {
      _content = await file(reqPath)
    }
  }

  return _content
}

module.exports = content