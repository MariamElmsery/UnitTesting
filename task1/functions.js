function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("division by zero!");
  return a / b;
}

function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

  
function findMax(arr) {
    if (arr.length === 0) {
        return null; 
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMinNumber(arr) {
    
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    
    return min;
  }
  
  
  function power(b, n) {
    return Math.pow(b, n);
  }
  
  function squareRoot(num) {
    if (num < 0) throw new Error("negative number!");
    return Math.sqrt(num);
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  module.exports = {
      multiply,
      divide,
    sortArray,
    findMax,
    findMinNumber,
    power,
    squareRoot,
    factorial,
    shuffleArray
    
  };