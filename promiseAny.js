const p1 = Promise.resolve("Error1");
const p2 = Promise.resolve("Error");
const p3 = Promise.resolve("mayur");

Promise.any([p1,p2, p3]).then(console.log).catch(console.log);