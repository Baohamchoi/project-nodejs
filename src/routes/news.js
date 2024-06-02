var express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);
router.use('/', newsController.index);  // Route của trang chính nằm ở cuối cùng, các đường dẫn đến các trang chi tiết hơn nằm ở trên

module.exports = router;