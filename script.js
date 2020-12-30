function reverse(string){
    var splitCharacters = string.split("");
    var reversedCharacters = splitCharacters.reverse();
    var joinedChar = reversedCharacters.join("");
    return joinedChar;
    // return srting2.split("").reverse().join(""); ----same as above;
   
}
function isPalindrome(string){
   var reverse1 =  reverse(string);
   return string ===reverse1;
}
function dateToString(date){
    var datestr = { day : "",month : "", year : ""}
     if(date.day < 10 ){
         datestr.day = "0"+date.day;
     }
     else{
         datestr.day=date.day.toString();
     }
     if(date.month < 10 ){
        datestr.month = "0"+date.month;
    }
    else{
        datestr.month=date.month.toString();
    }
    datestr.year = date.year.toString();
    return datestr;
}
var date = {
    day:15,
    month:12,
    year:2000
}
console.log(date);
console.log(dateToString(date));