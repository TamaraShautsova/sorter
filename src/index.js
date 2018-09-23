class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = (a , b)=> a - b;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var sortedArray =[];
    for (let i = 0; i < indices.length; i++){
      sortedArray.push(this.array[indices[i]]);
    }
    sortedArray.sort(this.compareFunction);
    indices.sort(
      (a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      }
    );

    for (let i = 0; i < sortedArray.length; i++){
      this.array[indices[i]] = sortedArray[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;