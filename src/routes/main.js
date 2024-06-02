const newsRouter = require('./news'); 
const siteRouter = require('./site'); 

function route(app) {

    app.use('/news', newsRouter); // localhost:4000/news (đường dẫn này sẽ chạy file news.js trong thư mục routes
    app.use('/', siteRouter);  // Đường dẫn mặc định phải để nằm dưới cùng, nếu để ở trên thì sẽ không chạy được các đường dẫn khác
}

module.exports = route;