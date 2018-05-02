console.loginsertionSort([]); // []
console.loginsertionSort([-11]); // [-11]
console.loginsertionSort([5, 4, 3, 2, 1]); // [1,2,3,4,5]
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
console.loginsertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var arr1 = ['Tim', 'Matt', 'Elie', 'Kira', 'Moxie', 'Angelina'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.loginsertionSort(arr1, strComp); // ["Angelina", "Elie", "Kira", "Matt", "Moxie", "Tim"]

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

console.loginsertionSort(arr2, comp2); // sorted by id in descending order
