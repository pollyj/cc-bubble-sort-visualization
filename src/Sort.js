class BubbleSort {
  constructor(array) {
    this.array = array;
  }
  sort(array) {
    array = this.array;
    let sortedNum = 0;
    for (let j = 0; j <= array.length; j++) {
      for (let i = 0; i <= array.length - sortedNum; i++) {
        if (array[i] > array[i + 1]) {
          this.swap(array, i, i + 1);
        }
      }
      sortedNum += 1;
    }
    console.log(this.array);
    return this.array;
  }

  swap(array, index1, index2) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  }

  returnValue(value) {
    return value;
  }
}

const arrayTest = [
  1,
  7,
  3,
  20,
  -4,
  15,
  105,
  57,
  94,
  5,
  72,
  26,
  0,
  173,
  4,
  75,
  46,
  35,
  76,
  13,
  834,
  95,
  20,
  46,
  34,
];
const bubble = new BubbleSort(arrayTest);
bubble.sort();

module.exports = BubbleSort;
