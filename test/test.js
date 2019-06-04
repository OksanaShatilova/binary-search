// tests for findElement.js function

const assert = require(`chai`).assert;
const findElement = require(`../findElement`);

describe(`test of binary search`, function () {

  it(`when the array is empty`, function () {
    const array = [];
		const element = 5;
		const result = findElement.findElement(array, element);
		assert.equal(result, `the element is not found`);
	});


	it(`when the array has only one element and it is false`, function() {
		const array = [1];
		const element = 5;
		const result = findElement.findElement(array, element);
		assert.equal(result, `the element is not found`);
	});


	it(`when the array has only one element and it is true`, function () {
		const array = [5];
		const element = 5;
		const result = findElement.findElement(array, element);
		assert.equal(result, `the element is found, it's index in sortedArray is 0`);
	});

	it(`when the array length is even number`, function () {
		const array = [4, 2, 0, 10];
		const element = 2;
		const result = findElement.findElement(array, element);
		assert.equal(result, `the element is found, it's index in sortedArray is 1`);
	});

	it(`when the array length is odd number`, function () {
		const array = [1, 4, 2, 6, 0];
		const element = 1;
		const result = findElement.findElement(array, element);
		assert.equal(result, `the element is found, it's index in sortedArray is 1`);
	});

	it(`when the array has fractions, positive and negative numbers`, function () {
		const array = [-2, -4.3, 5.5, 10, 0, 500, -73];
		const element = 5.5;
		const result = findElement.findElement(array, element);
		assert.equal(result, `the element is found, it's index in sortedArray is 4`);
	});

	it(`when the array doesn't contain the element`, function () {
		const array = [-2, -4.3, 5.5, 10, 0, 500, -73];
		const element = -7;
		const result = findElement.findElement(array, element);
		assert.equal(result, `the element is not found`);
	});
});
