var chai = require('chai');
var expect = chai.expect;

// NOTE: These test ONLY WORK because require-self has been run beforehand!!
//       (see package.json)
//
//       There's probably a better way to test this.
describe('require-self', function() {
  it('works on "require-self" package itself', function() {
    var rs = require('require-self');

    expect(rs).to.be.a('function');
  });
});
