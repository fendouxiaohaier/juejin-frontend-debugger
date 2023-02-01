const p = new Promise((resolve) => {
  setTimeout(() => resolve(1), 3000);
});

const e = p.then((value) => {
  console.log('p执行完毕:', value);
  return 2;
});

console.log(e);

e.then((value) => {
  console.log('e执行完毕：', value);
});

setTimeout(() => {
  console.log(e);
}, 4000);
