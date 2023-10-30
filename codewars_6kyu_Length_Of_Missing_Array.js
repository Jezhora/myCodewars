`You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.`

function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null || arrayOfArrays.length === 0) {
    return 0;
  }

  for (const item of arrayOfArrays) {
    if (item === null || item.length === 0) {
      return 0;
    }
  }
  const sort = arrayOfArrays.sort((a, b) => a.length < b.length ? -1 : 1)

  let missed = sort[0].length;
  for (let i = 0; i < sort.length; i++) {
    
    if (sort[i].length !== missed) {
      missed = sort[i].length - 1
      break
    }
    missed = sort[i].length + 1
  }

  return missed
}
