addEventListener('message', function aaaaa(event) {
  console.log('typeof event.data:', typeof event.data);

  let a = 1;
  for (let i = 0; i < event.data; i++) {
    a += 1;
  }

  postMessage(a);
});
