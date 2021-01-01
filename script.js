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
function dateInAllFormats(date){
    var datestr = dateToString(date);
    var ddmmyyyy = datestr.day+datestr.month+datestr.year;
    var mmddyyyy = datestr.month+datestr.day+datestr.year;
    var yyyymmdd = datestr.year+datestr.month+datestr.day;
    var ddmmyy = datestr.day+datestr.month+datestr.year.slice(-2);
    var mmddyy = datestr.month+datestr.day+datestr.year.slice(-2);
    var yymmdd = datestr.year.slice(-2)+datestr.month+datestr.day;
    return  [ ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];

}
var date = {
    day:2,
    month:12,
    year:2020
}
console.log(dateInAllFormats(date))