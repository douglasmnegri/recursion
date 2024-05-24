// This function generates the Fibonacci sequence up to the nth element starting from 0.
function fibs(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  const fibonacciSequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const n1 = fibonacciSequence[fibonacciSequence.length - 1];
    const n2 = fibonacciSequence[fibonacciSequence.length - 2];
    const f = n1 + n2;
    fibonacciSequence.push(f);
  }
  return fibonacciSequence;
}

// This function calculates the nth Fibonacci number starting from 0.
function fibsRec(n, fibSequence = [0, 1]) {
    if (fibSequence.length >= n) {
      return fibSequence;
    }
  
    fibSequence.push(
      fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]
    );
  
    return fibsRec(n, fibSequence);
  }
  
  console.log(fibsRec(8));