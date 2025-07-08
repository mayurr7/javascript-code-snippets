const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = new Promise((resolve, reject) => {
    setTimeout((resolve("foo"), 100))
});



Promise.all([p1, p2, p3]).then(console.log).catch(console.log);

