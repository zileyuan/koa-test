const defaultController = require('./controllers/default');

module.exports = function (router) {
    router.get('/', defaultController.root);
    router.get('/data', defaultController.data);
    router.post('/signin', defaultController.signin);
};