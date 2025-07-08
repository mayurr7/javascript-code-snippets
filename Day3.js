//Write code to double each value in the object.
const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj).forEach(key => {
    obj[key] *= 2;
})
console.log(obj);


//convert above object in array
const objArr = Object.keys(obj);
console.log(objArr);

