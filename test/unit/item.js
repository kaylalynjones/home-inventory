/* global describe, it */
/* jshint expr:true */

'use strict';

var expect = require('chai').expect;
var Item = require('../../app/models/item');

describe('Item', function(){
  describe('constructor', function(){
    it('should create a new item object', function(){
      var tv = new Item('tv', 'living room', '7/14/2014', '1', '600');
      expect(tv).to.be.ok;
      expect(tv).to.be.instanceof(Item);
      expect(tv.name).to.equal('tv');
      expect(typeof tv.dateAcquired).to.equal('object');
      expect(tv.dateAcquired).to.be.instanceof(Date);
      expect(tv.room).to.equal('living room');
      expect(tv.count).to.equal(1);
      expect(tv.costEach).to.equal(600);
    });
  });

});
