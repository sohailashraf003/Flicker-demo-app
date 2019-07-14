/**
 * Feed Service
 * 
 */

const request = require("request-promise-native");
const log4js = require('log4js');
const log = log4js.getLogger("feedService");
const CustomErrorHandler = require('../errorHandler/customErrorHandler'); 
const dotenv = require('dotenv');

let feedUrl = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1`;

const getFeeds = async function (tags = null) {
    try {
        log.info("Sending api request to Fliker");
        if (feedUrl) {
            feedUrl = `${feedUrl}&tags=${tags}`;

        }
        const reqOptions = { json: true }
        const feeds = await request.get(feedUrl, reqOptions);
        return feeds;
    } catch (e) {
        log.error("Unable to fetch data from Flicker", e);
        throw new CustomErrorHandler(500, "Unable to fetch data from Flicker, Please try again.");
    }
}

module.exports = {
    getFeeds,
}