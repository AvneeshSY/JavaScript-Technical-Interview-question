let n = 5;

// Upper half
for (let i = 1; i <= n; i++) {
  let ptrn = " ".repeat(n - i) + "*".repeat(2 * i - 1);
  console.log(ptrn);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
  let ptrn = " ".repeat(n - i) + "*".repeat(2 * i - 1);
  console.log(ptrn);
}
