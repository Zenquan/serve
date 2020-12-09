const Koa = require('koa');
const path = require('path');
const error = require('koa-json-error');
const static = require('./middleware/static');
const { staticPath } = require('./config');

const app = new Koa();

app.use(error({
  postFormat: ({stack, ...rest}) => process.env.NODE_ENV === 'production' ? rest : { stack, ...rest }
}));

app.use(static(
  process.env.static ? process.env.static : path.join(__dirname, staticPath)
));

const port = process.env.port || 3300;

app.listen(port, () => {
  console.log(`App is listen on ${port}`);
});
