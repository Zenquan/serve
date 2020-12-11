const walk = require('./walk');
const { parseMime } = require('./mimes');
const path = require('path');

function dir(url, reqPath) {
  let contentList = walk(reqPath);
  let html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
  `;
  // <img src=${path.join(__dirname, '/ico/folder.png')}>
  for (let [index, item] of contentList.entries()) {
    html = `${html}<li><a href="${url === '/' ? '' : url}/${item}">${item}</a>`;
  }
  html = `${html}</ul></body></html>`;

  return html;
}

module.exports = dir