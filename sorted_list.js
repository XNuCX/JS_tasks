class List {
  constructor() {
    this.elements = [];
    this.size = this.elements.length;
  }
  add(elemenent) {
    this.elements.push(elemenent);
    this.size = this.elements.length;
    this.elements.sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }
  remove(index) {
    if (index < this.elements.length && index >= 0) {
      let a = this.elements.splice(index, 1);
      console.log(a);

      this.size = this.elements.length;
    }
  }
  get(index) {
    if (index < this.elements.length && index >= 0) {
      return this.elements[index];
    }
  }
  size() {
    return this.elements.length;
  }
}

let a = new List();

a.remove(5);
console.log(a.elements);

console.log(a.size);
