const Course = require('../models/Course');
const { mutilpleMongoosetoObject } = require('../../util/mongoose');

class MeController {

    // [GET] /me/stores/courses
    storedCourses(req, res, next) { 

        let courseQuery = Course.find({});

        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            });
        }

        Promise.all( [courseQuery, Course.countDocumentsWithDeleted({ deleted: true})])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', { 
                    deletedCount,
                    courses : mutilpleMongoosetoObject(courses)
                });
            })
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({deleted:true})
        .then(courses => res.render('me/trash-courses', {
            courses: mutilpleMongoosetoObject(courses)
         })).catch(err => {
            console.log(err);
            next(err);
         });
    }
}

module.exports = new MeController();