function makeWorker() {
  let name = "Pete";
  return function () {
    alert(name);
  };
}
let work = makeWorker();
work();