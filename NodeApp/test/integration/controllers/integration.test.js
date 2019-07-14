const feedControler = require('../../../src/controllers/feedsController');
const feedService = require('../../../src/services/feedService');
let next = jest.fn();

describe("Feed controller integration test" , () => {
    const res = {
        statuCode: 0,
        status: function(statusCode) {
            this.statuCode = statusCode;
            return this;
        },
        json: function(onject) {

        }

    }
    
    test('should return all public feeds', async () => {
        let req = {
            body: {
                tags: "instagram ifttt"
            }
        }
       await feedControler.getFeeds(null, res);
       expect(res.statuCode).toBe(200);
    });

    test('should return all public feeds with specific tags', async () => {
        let req = {
            body: {
                tags: "instagram ifttt"
            }
        }
        await feedControler.getFeedsByTags(req, res);
        expect(res.statuCode).toBe(200);
     });

     test('should not return data with empty payload', async () => {
        let error;
        let next = (e) => {
            error = e;
        };
        let req = {
            body: {
                
            }
        }
        await feedControler.getFeedsByTags(req, res, next);
        expect(error.errorCode).toBe(400);
     });


});