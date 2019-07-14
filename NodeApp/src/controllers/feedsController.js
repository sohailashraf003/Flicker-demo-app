/**
 * Feed controller, To get public feeds
 * @Controller
 * @methods 
 *    getFeeds, getFeedsByTags
 */
const log4js = require('log4js');
const log = log4js.getLogger("feedsController");

const feedService = require("../services/feedService");
const CustomErrorHandler = require('../errorHandler/customErrorHandler');

/**
 * Returns all the flicker public feeds
 * @param {*} req , the api requets object
 * @param {*} res , the api response aobjecty
 */
const getFeeds = async (req, res) => {
    try {
        const feeds = await feedService.getFeeds();
        res.status(200).json({
            statusCode: 200,
            msg: '',
            data: feeds 
        }); 
        return; 
    } catch(e) {
        res.status(500).json({
            statusCode: 500,
            msg: 'Something went wrong on our side',
            data: ''
        });
        return;
    }
}

/**
 * Returns all the flicker public feeds which have the tags passed in the payload
 * @param {*} req , the api requets object
 * @param {*} res , the api response aobjecty
 * @payload {*} . The request payload contain Flicker tags
 */
const getFeedsByTags = async (req, res, next) => {
    try {
        const tags = req.body.tags;
        if(!tags) {
            log.error("Invalid paylaod");
            throw new CustomErrorHandler(400, "Please enter the tags to filter the result.");
        }
        const feeds = await feedService.getFeeds(tags); 
        res.status(200).json({
            statusCode: 200,
            msg: '',
            data: feeds
        });
        return;
    } catch(e) {
        log.error(e);
        next(e);
    }
}

module.exports = {
    getFeeds,
    getFeedsByTags
}

