/* global describe, it, before, beforeEach */
/* jshint expr:true */

'use strict';

var expect = require('chai').expect;
var connect = require('../../app/lib/mongodb');
var Mongo = require('mongodb');
var Item;

describe('Item', function(){
  before(function(done){
    connect('home-inventory-test', function(){
      Item = require('../../app/models/item');
      done();
    });
  });

  beforeEach(function(done){
    global.mongodb.collection('items').remove(function(){
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
        expect(tv._id).to.be.instanceof(Mongo.ObjectID);
        done();
      });
    });
  });

  describe('.find', function(){
    it('should return all the items from the database', function(done){
      var tv = new Item('tv', 'living room', '7/14/2014', '1', '600');
      tv.save(function(){
        Item.find(function(items){
          expect(items).to.be.ok;
          expect(items).to.have.length(1);
          done();
        });
      });
    });
  });


});
