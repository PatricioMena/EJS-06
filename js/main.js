// Eloquent Javascript Chapter 06 Exercises
// 1.- A Vector Type
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(newVec) {
    newVec.x = this.x + newVec.x;
    newVec.y = this.y + newVec.y;
    return newVec;
  }

  minus(newVec) {
    newVec.x = this.x - newVec.x;
    newVec.y = this.y - newVec.y;
    return newVec;
  }

  get length() {
    //d = √((x2-x1)2 + (y2-y1)2)
    let distance = Math.pow(Math.pow(this.x - 0, 2) + Math.pow(this.y - 0, 2), 0.5);
    return distance;
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
const obj1 = new Vec(1, 2);
