function countChar(str, char) {
let count = 0;
str = str.toLowerCase();
char = char.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i] == char){
            count++;
        }
    }
    return count;
}

console.log(countChar("mayuRrrrr", 'r'));
