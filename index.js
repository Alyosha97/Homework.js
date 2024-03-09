1.// Given a number. Write a recursive function that reverse the number. Return the new number.

function reverse(num, res = 0) {

  if(!num){
      return res
  }
  res = res * 10 + num % 10
  return reverse(Math.floor(num / 10),res)

}

console.log(reverse(321))




2.// Given a number and an array. Find the second occurrence of the number in the array.Consider that the occurrence of each element in the array is at least two.

function occurrence(n, arr, i = 0, firstn = true) {
  
  if(firstn && arr[i] === n) {
      firstn = false
  } else if(arr[i] === n){
      return i
  }
  return occurrence(n ,arr, i += 1, firstn)
}

console.log(occurrence(8, [8, 8, 4, 0, 8, 0, 0, 0, 4]))




3.// Given a substring and a string. Find how many times the substring occurred in the string.(For getting substring of the string use str.substring(startIndex, endIndex),str.substr(startIndex, length) )

function recurs(sub,str,res = 0) { 
  return !str.includes(`${sub}`) ? --res : recurs(sub,str.slice(str.indexOf(`${sub}`, 1)), res += 1)      
}

console.log(recurs('ook', 'Facebook looks odd'))




4.// Given a string, compute recursively (no loops) a new string where all appearances of 'pi' have been replaced by 3.14.

function recursStr(str,res = ''){
  let s = str.toLowerCase();
  
  if (s.length === 0 || s.length === 1) {
      return str;
  }

  if (s[0] == 'p' && s[1] == 'i') {
      
       res = recursStr(s.slice(2));
       return "3.14" + res;
  
  } else {
      return s[0] + recursStr(s.slice(1));
  }
}

console.log(recursStr('Picsart pipelines'))




5.// Given an array of nested arrays. Write a recursive function that flattens it. (Hint createfunction that concats arrays).

function flattening(arr, res = []) {
  return arr.reduce((res, elem) => {
      if (Array.isArray(elem)) {
          flattening(elem, res);
      } else {
          res.push(elem);
      }
      return res;
  }, res);
}

console.log(flattening([1, [3, 4, [1, 2]], 10]))

6.// Given a number. Write a function that calculates its sum of the digits and if that sum hasmore than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result. (recursive)


function sum(n){
    if (n == 0){
       return 0;
    }
    
    return (n % 9 == 0) ? 9 : (n % 9);
}

console.log(sum(2564))