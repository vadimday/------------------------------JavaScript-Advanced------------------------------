class MyArray {
  constructor(...elements) {
    this.elements = elements;
  }

  map(callback) {
    const result = [];
    for (let i = 0; i < this.elements.length; i++) {
      result.push(callback(this.elements[i], i, this.elements));
    }
    return new MyArray(...result);
  }

  some(callback) {
    for (let i = 0; i < this.elements.length; i++) {
      if (callback(this.elements[i], i, this.elements)) {
        return true;
      }
    }
    return false;
  }

  every(callback) {
    for (let i = 0; i < this.elements.length; i++) {
      if (!callback(this.elements[i], i, this.elements)) {
        return false;
      }
    }
    return true;
  }

  pop() {
    const lastElement = this.elements[this.elements.length - 1];
    this.elements = this.elements.slice(0, -1);
    return lastElement;
  }

  reduce(callback, initialValue) {
    const [accumulator, index] =
      initialValue !== undefined ? [initialValue, 0] : [this.elements[0], 1];

    const recursiveReduce = (acc, idx) => {
      if (idx >= this.elements.length) return acc;
      return recursiveReduce(
        callback(acc, this.elements[idx], idx, this.elements),
        idx + 1
      );
    };

    return recursiveReduce(accumulator, index);
  }
}
