var expect = require('chai').expect;
import { sum } from '../code/sum';

describe('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).to.be.equal(3);
});

describe('adds 1 + 2 to equal 3', function() {
    it('should be equal 3', function() {
        expect(sum(1, 2)).to.be.equal(3);
    });
});
