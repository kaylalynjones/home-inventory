/* global describe, it, before */
/* jshint expr:true */

'use strict';

var expect = require('chai').expect;
var Item;
var connect = require('../../app/lib/mongodb');

describe('Item', function(){
  before(function(done){
    connect('home-inventory-test', function(){
      Item = require('../../app/models/item');
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new item object', function(){
      var tv = new Item('tv', 'living room', '7/14/2014', '1', '600');
      expect(tv).to.be.ok;
      expect(tv).to.be.instanceof(Item);
      expect(tv.name).to.equal('tv');
      expect(tv.dateAcquired).to.be.instanceof(Date);
      expect(tv.room).to.equal('living room');
      expect(tv.count).to.equal(1);
      expect(tv.costEach).to.equal(600);
    });
  });

  describe('#save', function(){
    it('should save an item to the mongo database', function(done){
      var tv = new Item('tv', 'living room', '7/14/2014', '1', '600');
      tv.save(function(){
        expect(tv._id).to.be.ok;
        done();
      });
    });
  });

});
