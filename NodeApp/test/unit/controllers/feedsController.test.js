jest.mock('../../../src/services/feedService');
const feedControler = require('../../../src/controllers/feedsController');
const feedService = require('../../../src/services/feedService');

// feedService.getFeeds.mockImplementation((null, res) => {
//     return res;
// });

describe("Feed controller test" , () => {
   
    test.skip('should return all public feeds', () => {
       // const feedController = feedControler.getFeeds(null, res);
        //console.log(feedController);
    })
});