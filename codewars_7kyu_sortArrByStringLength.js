// Write a function that takes an array of strings as an argument and returns
// a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths,
// so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  const mapToObj = array.map(function (element, i) {
    return { index: i, value: element};
  })
 
  const objSorted = mapToObj.sort(function (a, b) {
    if (a.value.length > b.value.length) {
      return 1;
    }
    if (a.value.length < b.value.length) {
      return -1;
    }
    return 0;
  })

  let arrSorted = []
  objSorted.forEach(element => {
    n.push(element.value);
  });
  return arrSorted;
};

function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Beg", "Life", "I", "To"]))
// Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);