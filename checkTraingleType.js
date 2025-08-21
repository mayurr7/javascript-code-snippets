const checkTriangle = (a, b, c) =>{
        if (a === b && b === c && a === c) {
            return "Equilateral Triangle";            
        }else if (a == b || b === c || a === c) {
            return "Isosceles Triangle";
        }else{
            return "Scalene Triangle";
        }
}

console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(5, 2, 2));
console.log(checkTriangle(2, 8, 5));
