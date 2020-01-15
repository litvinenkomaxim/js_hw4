let fibonacci = [0, 1];
let fibo = ""
for (i = 2; i < 50; fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2], fibo = fibo + " " + fibonacci[i], i++) {}
alert(fibo);