var Grub = function(age = 0, color = 'pink', food = 'jelly') {
  this.age = age;
  this.color = color;
  this.food = food;
};

Grub.prototype.eat = function() {
  console.log("Yummmm, " + this.food)
}

var grub = new Grub(0, 'pink', 'jelly');
grub.eat();
console.log(grub);