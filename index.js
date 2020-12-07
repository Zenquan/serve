const Koa = require('koa');
const KoaStatic = require('koa-static');
const path= require('path');
const error = require('koa-json-error');
const content = require('./util/content');
const mimes = require('./util/mimes');
const argv = require('minimist')(process.argv.slice(2));

const app = new Koa();
const {staticPath} = require('./config');

app.use(error({
  postFormat: ({stack, ...rest}) => process.env.NODE_ENV === 'production' ? rest : {stack, ...rest}
}));

// app.use(KoaStatic(
//   path.join(__dirname, staticPath)
// ))

// 解析资源类型
function parseMime(url) {
    let extName = path.extname(url)
    extName = extName ? extName.slice(1) : 'unknown'
    return mimes[extName]
};

app.use(async (ctx) => {
    // 静态资源目录在本地的绝对路径
    let fullStaticPath = path.join(__dirname, staticPath)

    // 获取静态资源内容，有可能是文件内容，目录，或404
    let _content = await content(ctx, fullStaticPath)

    // 解析请求内容的类型
    let _mime = parseMime(ctx.url)

    // 如果有对应的文件类型，就配置上下文的类型
    if (_mime) {
        ctx.type = _mime
        console.log('mime>>>', _mime);
    }

    // 输出静态资源内容
    if (_mime && _mime.indexOf('image/') >= 0) {
        // 如果是图片，则用node原生res，输出二进制数据
        ctx.res.writeHead(200)
        ctx.res.write(_content, 'binary')
        ctx.res.end()
    } else {
        // 其他则输出文本
        ctx.body = _content
    }
});

const port = 3300 || process.env.port;

app.listen(port, () => {
  console.log(`App is listen on ${port}`);
});
