var expect = require('chai').expect;
import { mult } from '../code/multiply';

describe('multiply 1 to 2 to equal 3', function() {
    it('should be equal 3', function() {
        expect(mult(1, 2)).to.be.equal(2);
    });
});
