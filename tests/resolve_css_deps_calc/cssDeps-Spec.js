var chai = require('chai');
var expect = chai.expect;
var parser = require('../../lib/resolver/cssParser');


describe('CSS dependency calculate', function() {

  beforeEach(function(){
    parser.clear();
  });

  function swift(str) {
    return str.replace(/\\/g, '/');
  }

  it('#order & unique', function() {
    var entry_point = __dirname + '/css/a.css';
    var arr = parser.parse({
      css_entry_point: entry_point,
      encoding: 'utf8'
    });

    expect(arr.length).to.equal(3);
    expect(swift(arr[0])).to.equal(swift(__dirname + '/css/inner/c.css'));
    expect(swift(arr[1])).to.equal(swift(__dirname + '/css/b.css'));
    expect(swift(arr[2])).to.equal(swift(__dirname + '/css/a.css'));
  });

  it('#circle reference', function() {
    /*
     var entry_point = __dirname + '/css/d.css';
     var arr = parser.parse({
     css_entry_point: entry_point,
     encoding: 'utf8'
     });

     expect(arr.length).to.equal(2);
     expect(swift(arr[0])).to.equal(swift(__dirname + '/css/e.css'));
     expect(swift(arr[1])).to.equal(swift(__dirname + '/css/d.css'));*/
  });

});