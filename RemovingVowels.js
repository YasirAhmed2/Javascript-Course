function removeVowels(str){
    let newStr='';
    for(let i=0;i<str.length;i++){

        if (str[i]!=='a'&&str[i]!=='A'
            &&str[i]!=='e'&&str[i]!=='E'
            &&str[i]!=='i'&&str[i]!=='I'
            &&str[i]!=='o'&&str[i]!=='O'
            &&str[i]!=='u'&&str[i]!=='U'
        ){
newStr+=str[i];
        }
        
    }
    return newStr;

}

let string='hello I am learning Java';
let vowelRemoved=removeVowels(string);
console.log("String without vowels: ", vowelRemoved);