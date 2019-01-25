const httpget = require('./http-client');

describe('httpget', () => {
  it('should get data from url', (done) => {
    function callback(data) {
      expect(data).toEqual('Hello world');
      done();
    }

    process.argv = ['node', 'http-client.js', 'http://localhost:5000'];
    httpget(callback);
  });
});
