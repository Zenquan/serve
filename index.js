const Koa = require('koa');
const error = require('koa-json-error');
const static = require('./middleware/static')

const app = new Koa();

app.use(error({
  postFormat: ({stack, ...rest}) => process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
}));

// app.use(KoaStatic(
//   path.join(__dirname, staticPath)
// ))

app.use(static);

const port = process.env.port || 3300;

app.listen(port, () => {
  console.log(`App is listen on ${port}`);
});
