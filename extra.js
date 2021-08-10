/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
function countChars(str) {
  let obj = {};
  let arrayofchars = str.split("");
  arrayofchars.forEach((element) => {
    if (!obj[element]) {
      obj[element] = 0;
    }
    obj[element]++;
  });
  let lengths = [];
  for (let key in obj) {
    lengths.push(obj[key]);
  }
  let maxvalue = Math.max(...lengths);
  for (let ech in obj) {
    if (obj[ech] === maxvalue) console.log(`${ech} : ${obj[ech]}`);
  }
}

 countChars('hello world')
 countChars('saikrishnareddygoka ')

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

function anagrams(str1, str2) {
  let ar1 = str1.split("");
  let ar2 = str2.split("");
  if (ar1.length === ar2.length) {
    if (
      ar1.forEach((ele) => {
        ele.includes(...ar2);
      })
    ) {
      console.log("anagrams");
    }
  } else console.log("Not Anagrams");
}
 anagrams('darren', 'nerrad')
 anagrams('rail safety', 'fairy tales')

function checkStringsAnagram(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 !== len2) {
    console.log("Invalid Input");
    return;
  }
  let str1 = a.split("").sort();
  console.log(str1);
  let str2 = b.split("").sort();
  console.log(str2);
  if (str1 === str2) {
     console.log("True");
  } else {
     console.log("False");
  }
}
  checkStringsAnagram("indian!,","ndiani,!")
  checkStringsAnagram("indian","ndaiii")
  checkStringsAnagram('RAIL! SAFETY!', 'fairy tales')

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

function sublistanagrams(s, a) {
  let sublist = [];
  let temp = "";
  let arr = s.split("").sort().join("");
  a.forEach((ele) => {
    temp = ele.split("").sort().join("");
    if (temp === arr) {
      sublist.push(ele);
    }
  });
  console.log(sublist);
}
sublistanagrams('game',['ameg','gemu','ugem','games','gema'])

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

function palindrome(str1) {
  let rev = str1.split("").reverse().join("");
  if (rev === str1) console.log("palindrome");
  else console.log("Not a Palindrome");
}
 palindrome('apple')
 palindrome('abba')

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
function intrev(a) {
  let str = a.toString();
  console.log(typeof str);
  let news = str.split("").reverse().join("");
  let latestnews = parseInt(news);
  console.log(latestnews);
  console.log(typeof latestnews);
}
intrev(34678)

/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

const hashes = function (n) {
  let str = "";
  for (i = 0; i <= n; i++) {
    for (j = 0; j < i; j++) {
      str += "#";
    }
    str += "\n";
  }
  console.log(str);
};
hashes(5)

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */
const stringrev = function (str) {
  let newstr = str.split("");
  let revstr = [];
  for (let i = 0; i < newstr.length; i++) {
    revstr.push(newstr[newstr.length - 1 - i]);
  }
  revstr1 = revstr.join("");
  console.log(revstr1);
};
stringrev('hello')
/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/
const chunk = function (a, s) {
  let big = [];
  let small = [];
  let nextsmall = [];
  let final = [];
  let n = a.length / s;
  console.log(n);
  for (i = 0; i < a.length; i++) {
    if (i < n) {
      small.push(a[i]);
    } else if (i >= n && i <= n + n) {
      nextsmall.push(a[i]);
    } else if (i >= n + n) {
      final.push(a[i]);
    }
  }
  big.push(small);
  big.push(nextsmall);
  big.push(final);
  console.log(big);
};

chunk([1, 2, 3, 4], 2);
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
chunk([1, 2, 3, 4, 5], 10);

// let a=[2,3,4]
// b=[2,3]
// a.push(b)
// console.log("Hey",a)

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

const pyramid = function (n) {
  let str = "";
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
};
 pyramid(5)

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;

  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}
console.log(matrix(5));
