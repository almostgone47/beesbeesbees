var Bee = function(age = 5, color = 'yellow') {
  // set properties from Grub
  Grub.call(this, age, color);
  this.job = 'keep on growing';
};

// set inheritance
Bee.prototype = Object.create(Grub.prototype);
// set Bee constructor
Bee.prototype.constructor = Bee;

var bee = new Bee();
console.log(bee);