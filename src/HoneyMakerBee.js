var HoneyMakerBee = function(age = 10) {
  // set properties
  Bee.call(this, age);
  this.job = 'make honey';
  this.honeyPot = 0;
};

// set inheritance
HoneyMakerBee.prototype = Object.create(Bee.prototype);
// set constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
};
