var express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);
router.use('/', siteController.index);  // Route của trang chính nằm ở cuối cùng, các đường dẫn đến các trang chi tiết hơn nằm ở trên

module.exports = router;