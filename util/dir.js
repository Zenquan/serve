const walk = require('./walk')

function dir(url, reqPath) {
  let contentList = walk(reqPath)
  let html = `<ul>`
  for (let [index, item] of contentList.entries()) {
    html = `${html}<li><a href="${url === '/' ? '' : url}/${item}">${item}</a>`
  }
  html = `${html}</ul>`

  return html
}

module.exports = dir