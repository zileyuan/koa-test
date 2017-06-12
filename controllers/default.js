module.exports = function (router) {
    router.get('/', async (ctx, next) => {
        await ctx.render('index', {
            title: 'Welcome'
        });
    });
    router.get('/data', async (ctx, next) => {
        var o={"name":"admin@example.com","password":123456};
        ctx.body = o;
    });
    router.post('/signin', async (ctx, next) => {
        let email = ctx.request.body.email || '';
        let password = ctx.request.body.password || '';
        if (email === 'admin@example.com' && password === '123456') {
            console.log('signin ok!');
            await ctx.render('signin-ok', {
                title: 'Sign In OK',
                name: 'Mr Node'
            });
        } else {
            console.log('signin failed!');
            await ctx.render('signin-failed', {
                title: 'Sign In Failed'
            });
        }
    });
};