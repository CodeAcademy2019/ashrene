const asyncFn = require("./warm-up")

jest.useFakeTimers();

test('waits 300 ms before printing',() => {
    asyncFn();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
})