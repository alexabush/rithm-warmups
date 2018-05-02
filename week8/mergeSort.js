// let arr = [];
// for (let i = 0; i < 10; i++) {
// 	arr[i] = Math.floor(Math.random() * 50) + 1;
// }

// console.log("Unsorted:");
// arr.forEach(x => console.log(x))
// let sortedArr = mergeSort(arr);
// console.log("Sorted:");
// sortedArr.forEach(x => console.log(x))

// function mergeSort(arr) {
//     if (arr.length < 2) return arr;
//     var middle = parseInt(arr.length / 2);
//     var left   = arr.slice(0, middle);
//     var right  = arr.slice(middle, arr.length);

//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//     var result = [];
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }
//     while (left.length)
//         result.push(left.shift());
//     while (right.length)
//         result.push(right.shift());
//     return result;
// }

function mergeSort(arr, comparator) {
  if (comparator === undefined) {
    comparator = defaultComparator;
  }
  if (arr.length < 2) return arr;
  var middle = parseInt(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right, comparator) {
  if (comparator === undefined) {
    comparator = defaultComparator;
  }
  var result = [];
  while (left.length && right.length) {
    if (comparator(left[0], right[0]) <= 0) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

function defaultComparator(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

mergeSort([]); // []
mergeSort([-11]); // [-11]
mergeSort([5, 4, 3, 2, 1]); // [1,2,3,4,5]
var nums = [
  4,
  3,
  5,
  3,
  43,
  232,
  4,
  34,
  232,
  32,
  4,
  35,
  34,
  23,
  2,
  453,
  546,
  75,
  67,
  4342,
  32
];
mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var arr1 = ['Tim', 'Matt', 'Elie', 'Kira', 'Moxie', 'Angelina'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

mergeSort(arr1, strComp); // ["Angelina", "Elie", "Kira", "Matt", "Moxie", "Tim"]

var arr2 = [
  {
    id: 34,
    name: 'Moxie',
    job: 'sleeping'
  },
  {
    id: 23,
    name: 'Tim',
    job: 'teaching'
  },
  {
    id: 24,
    name: 'Kira',
    job: 'growth'
  },
  {
    id: 33,
    name: 'Whiskey',
    job: 'eating'
  }
];

function comp2(a, b) {
  if (a.id < b.id) {
    return 1;
  } else if (a.id > b.id) {
    return -1;
  }
  return 0;
}

mergeSort(arr2, comp2); // sorted by id in descending order
