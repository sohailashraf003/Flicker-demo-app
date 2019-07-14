const request = require('supertest');
const app = require('../../src/app');


describe('e2e tests', function () {

    describe('/api/feeds', function () {

        it('should return all feed', function (done) {
            request(app)
                .get('/api/feeds')
                .expect(200)
                .end(function (err, body) {
                    expect(err).toBeNull();
                    done();
                });
        });

        it('should retrun feeds with specific tags', function (done) {
            request(app)
                .post('/api/feeds/')
                .send({"tags": "instagram ifttt"})
                .expect(200)
                .end(function (err, res) {
                    expect(err).toBeNull();
                    done();
                });
       });
    });
});