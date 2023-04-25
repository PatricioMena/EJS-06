// Eloquent Javascript Chapter 06 Exercises

// Problem 1. A vector type

// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(newVec) {
    // newVec.x = this.x + newVec.x;
    // newVec.y = this.y + newVec.y;
    let addX = this.x + newVec.x;
    let addY = this.y + newVec.y;
    return new Vec(addX, addY);
  }

  minus(newVec) {
    // newVec.x = this.x - newVec.x;
    // newVec.y = this.y - newVec.y;
    let minusX = this.x - newVec.x;
    let minusY = this.y - newVec.y;
    return new Vec(minusX, minusY);
  }

  get length() {
    //d = √((x2-x1)2 + (y2-y1)2)
    let distance = Math.sqrt(this.x ** 2 + this.y ** 2);
    return distance;
  }
}

console.log('Problem 1');
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);

// Problem 2. Groups
class Group {
  constructor() {
    this.group = [];
  }

  add(value) {
    //includes return a Boolean
    this.group.includes(value) ? this.group : this.group.push(value);
    // mayanwolfe solution
    // if(!this.group.includes(value)) this.group.push(value);
  }

  delete(value) {
    let newGroup = this.group.filter((num) => num !== value);
    this.group = newGroup;
  }

  has(value) {
    return this.group.includes(value);
  }

  // methods that have static written before their name are stored on the constructor, rather than its prototype;
  static from(arr) {
    let group = new Group();
    for (let element of arr) {
      group.add(element);
    }
    return group;
  }
}

console.log('Problem 2');

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
