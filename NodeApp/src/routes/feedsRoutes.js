/**
 * Feed router
 */
 const express = require('express');
 const { getFeeds, getFeedsByTags } = require('../controllers/feedsController');
 const router = express.Router();

 
 router.get('/feeds', getFeeds); // Feed router to get all feeds
 router.post('/feeds', getFeedsByTags); // Feed router by tags , Filter the result with tags

 module.exports = router;