function pow(x) {
  n = 3
  if (n == 1) {
    return x;
  } else {
    n - 1;
    return x * pow(x);
  }
}

console.log(pow(2)); // 8