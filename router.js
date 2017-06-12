var child_router = require('koa-router')();

const defaultController = require('./controllers/default');

function routeDefault(router) {
    router.get('/', defaultController.root);
    router.all('/data', defaultController.data);
    router.post('/signin', defaultController.signin);

    child_router.all('/data', defaultController.data);
    router.use('/group', child_router.routes())
}

module.exports = function (router) {
    routeDefault(router)
};