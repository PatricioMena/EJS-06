/// Problem 3. Iterable Groups
// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

// It is okay if your iterator behaves strangely when the group is modified during iteration

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
    // mayanwolfe solution
    // splice method remove or replace existing elements in an array and/or
    // if (this.group.includes(value)) {
    //   this.group.splice(this.group.indexOf(value), 1);
    // }
  }

  has(value) {
    return this.group.includes(value);
  }

  // methods that have static written before their name are stored on the constructor, rather than its prototype;
  static from(obj) {
    let group = new Group();
    for (let element of obj) {
      group.add(element);
    }
    return group;
  }
}

class GroupIterator {
  constructor(obj) {
    //every loops needs a position (index) and an object to iterate
    this.index = 0;
    this.group = {};
  }

  next() {
    if (this.index == this.group.length) return { done: true };

    let value = this.group[this.index];
    this.index++;

    return { value, done: false };
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this);
};

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c
