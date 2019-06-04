// binary search of element in an array

module.exports.findElement = (arr, element) => {
	let leftBorder = 0;
	let rightBorder = arr.length - 1;
    const sortedArray = arr.sort(function(a, b) {
	    return a - b;
    });

    while (leftBorder < rightBorder) {

        const middleIndex = Math.floor((leftBorder + rightBorder) / 2);

        if (sortedArray[middleIndex] > element) {
          rightBorder = middleIndex - 1;
        }

        if (sortedArray[middleIndex] < element) {
          leftBorder = middleIndex + 1;
        }

        if (sortedArray[middleIndex] === element) {
          return "the element is found, it's index in sortedArray is " + middleIndex;
        }
    }

    if (sortedArray[leftBorder] === element) {
    	return  "the element is found, it's index in sortedArray is " + leftBorder;
    } else return "the element is not found";
};