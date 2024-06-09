const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const app = express();
const port = 4000;
const route = require('./routes/main'); // import file main.js trong thư mục routes

// import Database
const db = require('./config/db/main'); // import database mongoDB trong thư mục config/db

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public'))); // Cho phép truy cập vào thư mục public trong lúc chạy server trên localhost:4000
// chạy server trên localhost:4000/img/logo.png thì có thể tấy được ảnh logo.png trong thư mục public

// Middleware: xử lý dữ liệu từ form (POST
app.use(express.urlencoded({extends: true}));
app.use(express.json());
app.use(methodOverride('_method')); // Ghi đè phương thức POST thành PUT hoặc DELETE,... (dùng để xử lý các phương thức PUT, DELETE,...)

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({ 
  extname: '.hbs', // sửa lại đuôi file handlebars thành .hbs (để tên đuôi file được ngắn gọn hơn)
  helpers: {
    sum: (a, b) => a + b,
  }
})); // handlebars.engine() return a function
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// console.log('PATH: ', path.join(__dirname, "resources/views"))

// Local host --- hosting (2 cái này giống nhau, chỉ khác là localhost chỉ chạy trên máy cá nhân còn hosting chạy trên server lớn hơn có nhiều người sử dụng)

// Action ---> Dispatcher ---> Function handler

//Routes init: Khởi tạo các routes (Tuyến đường của các trang web)
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`) // http://localhost:4000
);