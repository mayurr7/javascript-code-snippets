const p1= new Promise((resolve) => setTimeout(resolve, 301, "slow"));
const p2= new Promise((resolve) => setTimeout(resolve, 300, "fast"));
const p3= new Promise((reject) => setTimeout(reject, 300, "very fast"));

Promise.race([p1,p2,p3]).then(console.log).catch(console.log);