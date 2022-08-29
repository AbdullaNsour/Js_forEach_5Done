// <<<<<<<<<<<<<<<<<<<<<<<<<<Ex1>>>>>>>>>>>>>>>>>>>>>>>>>>

function doubleValues(arr) {
  const arra = [];
  arr.forEach((val) => {
    arra.push(val * 2);
  });
  return arra;
}
console.log(`Ex 1 --------------------------- doubleValues`);
console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([5, 1, 2, 3, 10]));

// <<<<<<<<<<<<<<<<<<<<<<<<<<Ex2>>>>>>>>>>>>>>>>>>>>>>>>>>

function onlyEvenValues(arr) {
  const even = [];
  arr.forEach((val) => {
    if (val % 2 === 0) even.push(val);
  });
  return even;
}

console.log(`Ex 2 ------------------------    onlyEvenValues`);
console.log(onlyEvenValues([1, 2, 3]));
console.log(onlyEvenValues([5, 1, 2, 3, 10, 4]));

// <<<<<<<<<<<<<<<<<<<<<<<<<<Ex3>>>>>>>>>>>>>>>>>>>>>>>>>>

function showFirstAndLast(arr) {
  const firstLast = [];
  arr.forEach(function (val) {
    firstLast.push(val[0] + val[val.length - 1]);
  });
  return firstLast;
}

console.log(`Ex 3 ------------------------    showFirstAndLast`);
console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"]));
console.log(showFirstAndLast(["hi", "goodbye", "smile"]));

// <<<<<<<<<<<<<<<<<<<<<<<<<<Ex4>>>>>>>>>>>>>>>>>>>>>>>>>>

function addKeyAndValue(arr, key, value) {
  arr.forEach(function (val) {
    val[key] = value;
  });
  return arr;
}

console.log(`Ex 4  -------------------------- addKeyAndValue`);
console.log(
  addKeyAndValue(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "title",
    "instructor"
  )
);

// <<<<<<<<<<<<<<<<<<<<<<<<<<Ex5>>>>>>>>>>>>>>>>>>>>>>>>>>

// function vowelCount(str) {
//   var splitArr = str.toLowerCase().split("");
//   var object = {};
//   var vowels = "aeiou";

//   splitArr.forEach(function (words) {
//     if (vowels.indexOf(words) !== -1) {

//       if (object[words]) {object[words]++;

//       } else { object[words] = 1;

//       }}});

//   return object;
// }
// function vowelCount(str) {
//   var splitArr = str.toLowerCase().split("");
//   var object = {};
//   var vowels = "aeiou";

//   splitArr.forEach(function (words) {
//     switch (words){
//         case (vowels.indexOf(words) !== -1):
//     }
// });

//   return object;
// }


// <<<<<<<<<<<<<<<<<<<<<<<<<<Ex5>>>>>>>>>>>>>>>>>>>>>>>>>>

// const vowels = ["a", "e", "i", "o", "u"];
// let count = {};

// function countVowel(str) {
//   let count = 0;
//   for (let letter of str.toLowerCase()) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowel(Elin));

// vowels.forEach((item) => {
//   if (count[item]) {
//     count[item]++;
//   } else {
//     count[item] = 1;
//   }
// });

// console.log(count);

function vowelCount(str) {
  const myArray = str.split("");

  vowel = {};
  c = 0;
  c1 = 0;
  c2 = 0;
  c3 = 0;
  c4 = 0;

myArray.forEach((item) => {
    switch (item !== null) {
    case item == "i" || item == "I":
        c = c + 1;
        vowel["i"] = c;
        break;
    case item == "a" || item == "A":
        c1 = c1 + 1;
        vowel["a"] = c1;

        break;
    case item == "e" || item == "E":
        c2 = c2 + 1;
        vowel["e"] = c2;

        break;
    case item == "o" || item == "O":
        c3 = c3 + 1;
        vowel["o"] = c3;
        break;
    case item == "u" || item == "U":
        c4 = c4 + 1;
        vowel["u"] = c4;
        break;
    }
});
return vowel;
}

console.log(`Ex 5  -------------------------- switch`);
console.log(vowelCount("I Am awesome and so are you"));


// <<<<<<<<<<<<<<merge sort >>>>>>>>>>>>>>
//Source:https://bit.ly/3hEZdCl
// BucketSort
const bucketSort = (arr, size = 5) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const buckets = Array.from(
      { length: Math.floor((max - min) / size) + 1 },
      () => []
    );
    arr.forEach(val => {
      buckets[Math.floor((val - min) / size)].push(val);
    });
    return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
  }; 

  console.log( `Bucket Sort `)
  console.log(bucketSort([6, 3, 4, 1]));
  


// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
var array_length;
/* to create MAX  array */  
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    }
}

var arr = [3, 0, 2, 5, -1, 4, 1];
heapSort(arr);

console.log(`heap`)
console.log(arr);
