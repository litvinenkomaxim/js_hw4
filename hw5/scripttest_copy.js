let calculator = {
  read() {
    this.x = +prompt('input x');
    this.y = +prompt('input y');
    console.log(calculator);
  },

  sum() {
    let numberSum = this.x + this.y;
    return alert(`sum of numbers = ${numberSum}`);
  },
  multi() {
    let numberMulti = this.x * this.y;
    return alert(`multi of numbers = ${numberMulti}`);
  },
  diff() {
    let numberDiff = this.x - this.y;
    return alert(`diff of numbers = ${numberDiff}`);
  },
  div() {
    let numberDiv = this.x / this.y;
    return alert(`div of numbers = ${numberDiv}`);
  },
};
calculator.read();
calculator.sum();
calculator.multi();
calculator.diff();
calculator.div();