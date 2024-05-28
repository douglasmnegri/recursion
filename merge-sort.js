const arrayOfNumbers = [1, 5, 9, 13, 245, 50, 10, 15];

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const l = arr.slice(0, mid);
  const r = arr.slice(mid);
  return merge(mergeSort(l), mergeSort(r));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];

}

console.log(mergeSort(arrayOfNumbers));
