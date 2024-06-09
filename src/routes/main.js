const newsRouter = require('./news');
const meRouter = require('./me'); 
const siteRouter = require('./site'); 
const CoursesRouter = require('./courses'); 

function route(app) {

    app.use('/news', newsRouter); // localhost:4000/news (đường dẫn này sẽ chạy file news.js trong thư mục routes
    app.use('/me', meRouter); // localhost:4000/me (đường dẫn này sẽ chạy file me.js trong thư mục routes
    app.use('/courses', CoursesRouter); // localhost:4000/courses (đường dẫn này sẽ chạy file courses.js trong thư mục routes
    app.use('/', siteRouter);  // Đường dẫn mặc định phải để nằm dưới cùng, nếu để ở trên thì sẽ không chạy được các đường dẫn khác
}

module.exports = route;