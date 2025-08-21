function generateHash(input) {
    if(input.trim().length === 0) return false;

    let words = input.split(' ');
    console.log(words);
    
    let result = "#";
    for (let word of words) {
        let formatedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
        result += formatedWord;
    }
    return result;
};

const senetence = "my name is mayur tekale";
const hash = generateHash(senetence);
console.log(hash); 