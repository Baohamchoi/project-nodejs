const Course = require('../models/Course');
const { mutilpleMongoosetoObject } = require('../../util/mongoose');

class SiteController {

    // [GET] /
    index (req, res, next) {
        Course.find({}).then(courses => {
            res.render('home', { 
                courses : mutilpleMongoosetoObject(courses)
             });
        })  // trả về dữ liệu courses từ database qua file home.hbs
        .catch(next);
    }


    // async index(req, res) {  // async: hàm này chạy bất đồng bộ, chờ dữ liệu trả về từ database
    //     try {
    //         const courses = await Course.find({});
    //         res.json(courses);
    //     } catch (err) {
    //         res.status(400).json({ error: 'ERROR!!!' });
    //     }
    // }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;