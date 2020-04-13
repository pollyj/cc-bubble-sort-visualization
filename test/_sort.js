const BubbleSort = require("../src/Sort");
const { expect } = require("chai");

let bubble;
let array;

const sortedArray = [-5, 5, 9, 9, 18, 23, 37, 49, 65, 99, 1500];

describe("BubbleSort", () => {
  beforeEach(() => {
    array = [9, 18, 5, 9, 37, -5, 99, 1500, 65, 23, 49];
    bubble = new BubbleSort(array);
  });

  describe("the sort method", () => {
    it("should be a function", () => {
      expect(BubbleSort).to.be.a("function");
    });
    it("should have a bubble sort method", () => {
      expect(BubbleSort.prototype.sort).to.be.a("function");
    });
    it("should sort numbers in an array numerically", () => {
      expect(bubble.sort(array)).to.deep.equal(sortedArray);
    });
  });
});
