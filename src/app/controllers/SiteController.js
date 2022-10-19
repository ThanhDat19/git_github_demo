const Course = require('../models/Courses')
const {mutipleMongooseToObject} = require('../../util/mongoose')
class siteController {

    //GET
    index(req, res, next) {
            Course.find({})
                .then((courses) =>{
                    res.render('home', {
                        courses: mutipleMongooseToObject(courses),
                    });
                })
                .catch(next)
    }
}

module.exports = new siteController()