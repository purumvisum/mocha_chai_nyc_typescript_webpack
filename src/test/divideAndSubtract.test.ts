var expect = require('chai').expect;
import { divide } from 'code/divideAndSubtract';

describe('divide 2 and 1 to equal 2', () => {
    it('should be equal 3', function() {
        expect(divide(2, 1)).to.be.equal(2);
    });
});
