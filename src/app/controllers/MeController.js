const Course = require('../models/Course');
const { mutilpleMongoosetoObject } = require('../../util/mongoose');

class MeController {

    // [GET] /me/stores/courses
    storedCourses(req, res, next) {
        Course.find({})
        .then(courses => res.render('me/stored-courses', {
            courses: mutilpleMongoosetoObject(courses)
         })).catch(next);
    }
}

module.exports = new MeController();