function reverse1(string){
    var splitCharacters = string.split("");
    var reversedCharacters = splitCharacters.reverse();
    var joinedChar = reversedCharacters.join("");
    return joinedChar;
    // return string.split("").reverse().join("");
}
console.log(reverse1("manthan"));
function reverse2(srting2){
    return srting2.split("").reverse().join("");
}
console.log(reverse2("manthan"))

