var ForagerBee = function(age = 10) {
  Bee.call(this, age);
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}
