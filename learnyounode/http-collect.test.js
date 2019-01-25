const httpget = require('./http-collect');

describe('httpget', () => {
  it('should get data from url', (done) => {
    const callback = (data) => {
      expect(data).toEqual('Hello world 1 Hello world 2');
      done();
    };
    process.argv = ['node', 'http-collect.js', 'http://localhost:5000'];
    httpget(callback);
  });

  it('should get length of data from url', (done) => {
    const callback = (data) => {
      console.log(data);
      console.log(data.length);
      expect(data.length).toEqual('Hello world 1 Hello world 2'.length);
      done();
    };
    process.argv = ['node', 'http-collect.js', 'http://localhost:5000'];
    httpget(callback);
  });
});
