
'use strict';

function Item(name, room, dateAcquired, count, costEach){
  this.name = name;
  this.room = room;
  this.dateAcquired = new Date(dateAcquired);
  this.count = parseInt(count);
  this.costEach = parseFloat(costEach);
}

module.exports = Item;
