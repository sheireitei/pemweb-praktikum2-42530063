const express = require('express'); 
const router = express.Router();
const pageController = require('../controllers/page.controller.js');

router.get('/', pageController.getBeranda); 
router.get('/tentang', pageController.getTentang); // Rute Statis
router.get('/katalog', pageController.getKatalog);
router.post('/katalog', pageController.postKatalog);

module.exports = router;