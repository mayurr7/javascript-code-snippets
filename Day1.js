//1

function mystery(a, b=5,c){
 return a +b +c;
};

console.log(mystery(3, undefined, 7));
/*
x is 3 (passed directly).
y is 5 because undefined is passed as the second argument, triggering the default value of 5.
z is 7 (passed directly as the third argument).
*/


//2

let a = 0;
function check(){
    if(a === 0){
        let a = 1;
        a++;
    }
    return a;
}
console.log(check());

/*ans =0
    The function then returns the value of count outside the if block, which refers to the global count (still 0).
*/

//3
let arr = [1, 2, 3, 4];

arr[10] = 5;

console.log(arr.length);
/*
     ans =11;
     When we set arr[10] = 5, JavaScript fills the indices from 4 to 9 with undefined and places 5 at index 10.
 */

     //4
     const obj = {
        name: 'Alice',
        age: 25,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
    obj.greet();//two show proper output
    const greet = obj.greet;//here we use obj.greet.bind(obj) to show the values
    greet();

    /*
        console.log(greet()); // Output: Hello, my name is undefined and I am undefined years old.

    */

//5
function foo() {
    var x = 1;
    if (true) {
        var x = 2; // Same variable!
        console.log(x); // What will this log?
    }
    console.log(x); // What will this log?
}

foo();
//ans 2 2