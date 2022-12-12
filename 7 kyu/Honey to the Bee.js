function Bee(capacity, hive) {
  this.capacity = capacity;
  this.hive = hive;
}

function Hive() {
  this.pollen = 100;
}

//TODO: The amount of honey in the hive is not increasing.
Hive.prototype.addPollen = function(pollen) {
  this.pollen += pollen;
}

Hive.prototype.getPollen = function() {
  return this.pollen;
}

Bee.prototype.unloadPollen = function() {
  this.hive.addPollen(this.capacity);
}

let hive = new Hive();
let bee = new Bee(11, hive);

bee.unloadPollen();

console.log(hive.pollen)    // 111
