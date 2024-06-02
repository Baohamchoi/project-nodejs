const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, 'public'))); // Cho phép truy cập vào thư mục public trong lúc chạy server trên localhost:4000
// chạy server trên localhost:4000/img/logo.png thì có thể tấy được ảnh logo.png trong thư mục public

// Middleware: xử lý dữ liệu từ form (POST
app.use(express.urlencoded({extends: true}));
app.use(express.json()); 

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({ 
  extname: '.hbs' // sửa lại đuôi file handlebars thành .hbs (để tên đuôi file được ngắn gọn hơn)
})); // handlebars.engine() return a function
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log('PATH: ', path.join(__dirname, "resources/views"))

//route 1
app.get('/', (req, res) => {
  res.render('home'); // render file home.handlebars
});

//route 2
app.get('/news', (req, res) => {
  res.render('news'); // render file home.handlebars
});

//route 3
//method GET
app.get('/search', (req, res) => {
  // console.log(req.query.q);  // Lấy dữ liệu từ ô tìm kiếm (?q=<dữ liệu tìm kiếm>)
  res.render('search'); // render file home.handlebars
});

//method POST
app.post('/search', (req, res) => {
  console.log(req.body); // Lấy dữ liệu từ ô tìm kiếm (form) khi submit
  res.send(''); // render ra chuỗi rỗng
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`); // http://localhost:4000
})