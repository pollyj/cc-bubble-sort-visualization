class Sort {
  constructor(array, chart) {
    this.array = array;
    this.chart = chart;
    this.swapPairs = [];
  }

  sort(array) {
    this.swapPairs = [];
    array = this.array;
    let sortedNum = 0;
    for (let j = 0; j <= array.length; j++) {
      for (let i = 0; i <= array.length - sortedNum; i++) {
        if (array[i] > array[i + 1]) {
          this.swapPairs.push([i, i + 1]);
          this.swap(array, i, i + 1);
        }
      }
      sortedNum += 1;
    }
    return array;
  }

  swap(array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  }

  returnValue(value) {
    return value;
  }
}

module.exports = Sort;
