const path = require('path')
const fs = require('fs')

// 读取目录内容方法
const dir = require('./dir')
// 读取文件内容方法
const file = require('./file')

// 获取静态资源内容
async function content(ctx, fullStaticPath) {
  let reqPath = path.join(fullStaticPath, ctx.url)
  let exist = fs.existsSync(reqPath)
  let content = ''
  if (!exist) {
    content = '404 Not Found!'
  } else {
    let stat = fs.statSync(reqPath)
    if (stat.isDirectory()) {
      content = dir(ctx.url, reqPath)
    } else {
      content = await file(reqPath)
    }
  }

  return content
}

module.exports = content