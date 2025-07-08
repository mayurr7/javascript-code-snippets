const p1 = Promise.resolve(10);
const p2 = Promise.resolve("mayur");
const p3 = new Promise((resolve,reject) => {
    setTimeout(reject("mayyur"), 100)
})

Promise.allSettled([p1,p2,p3]).then(console.log).catch(console.log);
