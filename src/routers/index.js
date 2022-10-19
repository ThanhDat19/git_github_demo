const SiteRouter = require('./site')
const coursesRouter = require('./courses');
const mesRouter = require('./me');


function router(app){
    app.use('/me', mesRouter);
    app.use('/courses', coursesRouter);
    app.use('/', SiteRouter)
}

module.exports = router