//object
const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const Static = require('koa-static');
//function
const View = require('koa-view');

const app = new Koa();
const router = new Router();
const bodyParser = new BodyParser();
const static = new Static(__dirname + '/static');
const view = View(__dirname + '/views');

const regiestRouter = require('./router');

app.use(async (ctx, next) => {
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.log(`${ctx.request.method} ${ctx.request.url}: ${ms}ms`);
    ctx.response.set('X-Response-Time', `${ms}ms`);
});

app.use(bodyParser);
app.use(static);
app.use(view);

regiestRouter(router);
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');

