const defaultController = require('./controllers/default');

function routeDefault(router) {
    router.get('/', defaultController.root);
    router.get('/data', defaultController.data);
    router.post('/signin', defaultController.signin);
}

module.exports = function (router) {
    routeDefault(router)
};