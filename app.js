const Koa = require('koa');

const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const view = require('koa-view');
const static = require('koa-static');

const regiestRouter = require('./router');

const app = new Koa();

app.use(async (ctx, next) => {
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.log(`${ctx.request.method} ${ctx.request.url}: ${ms}ms`);
    ctx.response.set('X-Response-Time', `${ms}ms`);
});

app.use(bodyParser());
app.use(view(__dirname + '/views'))
app.use(static(__dirname + '/static'));

regiestRouter(router);
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');

