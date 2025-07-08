function check(name) {
    let newName = name.split('');
    let count = 0;
    for(let i = 0; i < newName.length; i++){
        if("aeiou".includes(newName[i])){
            count++;
        }
    }return count;
}

console.log(check("aeiou"));
