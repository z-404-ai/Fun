const sumOfEven = n => {
let s = 0; 
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) s += i;
  }; 
  return s;
}
