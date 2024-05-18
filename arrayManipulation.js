//Task 1
function processArray(arr) {
    return arr.map(function(num) {
      if (num % 2 === 0) {
        return num * num;
      } else {
        return num * 3;
      }
    });
}  //Task 2
function formatArrayStrings(strArr, numArr) {
  return strArr.map((str, i) => {
    if (numArr[i] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
 } 