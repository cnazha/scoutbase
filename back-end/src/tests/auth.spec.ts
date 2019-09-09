import 'mocha';
import { expect } from 'chai';

describe('Testing suite check', () => {
    it('should work', function () {
        expect("a string").to.be.a("string")
    });
});
