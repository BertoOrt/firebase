var a = [23,5,43,1,34,6, 10, 5]
var c = [1,2,3,4,5,6,7]
var d = [23,1,26,57,86,3,2,34,10]
console.log(d);

function swap(arr, pos1, pos2) {
  var temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
  return arr
}

function quickSort(arr, start, end) {
  var pivot = arr[Math.floor(arr.length / 2)]

  // console.log('pivot: ' + pivot, 'start: ' + start, 'end: ' + end);

  while(arr[start] < pivot) {
    start++;
  }

  while(arr[end] > pivot) {
    end--;
  }

  if (start <= end) {
    swap(arr, start, end);
  }

  check(arr, pivot, start, end)
}

function check(arr, pivot, start, end) {
  if (start !== end) {
    quickSort(arr, 0, arr.length - 1)
  } else {
    console.log(arr)
  }
}

quickSort(d, 0, d.length - 1)
