// Source: https://pawelgrzybek.com/mocking-functions-and-modules-with-jest/
import * as module from '../index';
jest.mock('../index');

describe('module test', () => {
    it('should log something', () => {
        const message = 'hello, world'
        module.log(message);
        expect(module.log).toHaveBeenCalledTimes(1);
        expect(module.log).toHaveBeenCalledWith(message)
    });
});