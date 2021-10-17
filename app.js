class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(string) {
    // here _hash is a private function that's why we put an underscore before its name, although its just for identification and not truly a private function, for making it truly private we can use symbol or weakmaps so it is not accessible on the instances of this class.
    let total = 0;
    let primeNumber = 31;
    for (let i = 0; i < Math.min(string.length, 100); i++) {
      let char = string[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * primeNumber + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      return undefined;
    } else {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  remove(key) {
    const index = this._hash(key);

    if (this.keyMap[index] && this.keyMap[index].length) {
      this.keyMap[index] = [];
      return true;
    } else {
      return false;
    }
  }
}

let ht = new HashTable();
ht.set("hello", "one");
ht.set("hi", "two");
ht.set("hey", "three");
ht.set("hllo", "four");
ht.set("hllos", "four");

// if we want to use something like this then we might want to use built in objects and their values in javascript -- this is just for understanding purposes
// best case time complexity --> O(1)
// worst case time complexity --> O(n)
