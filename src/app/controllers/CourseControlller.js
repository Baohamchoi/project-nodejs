const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {

    // [GET]  Đường dẫn: /courses/:slug

    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
        .then((course) => {
            res.render('courses/show', {course: mongooseToObject(course)})
        })
        .catch(next);
    }

    // [GET]  Đường dẫn: /courses/create

    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST]  Đường dẫn: /courses/store

    store(req, res, next) {
        const formData = req.body;
        formData.image = `htpps://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`; // Tạo ra một đường dẫn ảnh thumbnail từ videoId
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {});
    }

    // [GET]  Đường dẫn: /:id/edit

    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit', {
            course: mongooseToObject(course)
        })).catch(next);
    }

    // [PUT]  Đường dẫn: /courses/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))  // Chuyển hướng về trang courses đã lưu
            .catch(next);
    }

    // [GET]: Gửi yêu cầu lên server và yêu cầu server trả lại dữ liệu đó
    // [POST]: Gửi yêu cầu lên server và yêu cầu server tạo mới một dữ liệu
    // [PUT]: Gửi yêu cầu lên server và yêu cầu server cập nhật toàn bộ dữ liệu
    // [PATCH]: Gửi yêu cầu lên server và yêu cầu server cập nhật một phần dữ liệu (sửa từng field trong doucment)
    // [DELETE]: Gửi yêu cầu lên server và yêu cầu server xóa dữ liệu
    // [OPTIONS]: Gửi yêu cầu lên server và yêu cầu server trả lại các phương thức mà server hỗ trợ
    // [HEAD]: Gửi yêu cầu lên server và yêu cầu server trả lại phản hồi mà không có phần thân

}

module.exports = new CourseController();