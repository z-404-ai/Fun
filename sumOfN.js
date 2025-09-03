const sumOfN = (n) => {
let s = n; 

  for (let i = n - 1; i >= 0; i--) {
  s += i;
  }; 
  return s;
}
