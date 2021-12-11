function fibo(n) {
  let result = [], a = 0, b = 1;
  result.push(b);

  for(let i = 0; i < n; i++){
    result.push(a + b);
    a = b;
    b = result[i + 1];
  }

  return result;
}

console.log(fibo(25).join(', '));
