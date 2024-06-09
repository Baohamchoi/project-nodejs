var express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index);  // Route của trang chính nằm ở cuối cùng, các đường dẫn đến các trang chi tiết hơn nằm ở trên

module.exports = router;