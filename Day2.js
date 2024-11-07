let x =1;
function foo(){
    x+=1; //x is now 4, so x += 1 increments x to 5.
            //Now x < 5 is false, so it doesn't call foo() again and instead returns x,which is now 5.
    if(x < 5){
        foo();
    }
    return x;
}
console.log(foo());

// ans - 5

//Q.2
let a = 10;
(function() {
    //console.log(a);
    let a = 20;
    console.log(a);
})();
//The code will throw a ReferenceError: Cannot access 'a' before initialization.

//Q.3

for(var i = 0; i<3; i++){
    setTimeout(() => {
        console.log(i);
        
    }, 1000);
}
//ans - gives output  3 3 3 because var and 

//q.4
function myFunction() {
    var x = 10; // x is function-scoped
    if (true) {
        let y = 20;  // y is block-scoped
        const z = 30;  // z is block-scoped
        console.log(x); // Will log '10'
    }
    console.log(y); // Will throw ReferenceError
    console.log(z); // Will throw ReferenceError
}

myFunction();


//Q.5
const obj = {
    name: 'John',
    age: 25,
    greet: function() {
        console.log(this.name);//undefined
    }
};

const greet = obj.greet;
greet();
