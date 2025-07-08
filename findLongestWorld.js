function findLongestWorld(sentence){
    let str = sentence.trim();
    let word = str.split(' ');
    
    let ans = word.sort((a, b) =>  b.length - a.length );
    console.log(word);    
    
    return ans[0];
}

const sentence = "My name is mayurbtekale am Software Developer";
console.log(findLongestWorld(sentence));


