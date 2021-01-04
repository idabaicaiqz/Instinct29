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
}//returns boolean True or False
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

} //returns Array of Dates in All Formats that too in strings
function checkPalindromeForAllFormats(date){
    var listOfPalindromes = dateInAllFormats(date);
    var flag = false;
    for ( var i = 0; i < listOfPalindromes.length;i++){
        if(isPalindrome(listOfPalindromes[i])){
            flag = true;
            break;
        }
    }
    return flag;
}//Returns Boolean True or False(true if any of formats is a palindome)
function isLeapYear(year){
    if(year%400===0){
        return true;
    }
    if(year%100===0){
        return false;
    }
    if(year % 4 === 0){
        return true;
    }
    return false; 
}//checks for leapyear 
 function getNextDate(date){
     var day = date.day + 1; // incrementing the days
     var month = date.month;
     var year = date.year;
     var daysInMonths =[31,28,31,30,31,30,31,31,30,31,30,31] //0-11;
     if (month === 2){ //check for feburary
         if(isLeapYear(year)){ // checking for leap year
             if(day>29){
                 day=1;
                 month++
             }
         }
         else{
             if(day>28){
                 day = 1;
                 month++
             }
         }
     }
     else{
         //check if the day exceeds the ma days in month
         if(day > daysInMonths[month - 1]){
             day = 1;
             month++
         }
     }
     if(month > 12){
         month = 1;
         year++
     }
     return{
         day:day,
         month:month,
         year:year
     }
 } // gets the next date including leapyear too
function nextPalindromeDate(date){
    var count = 0;
    var nextDate = getNextDate(date);
    while(1){
        count++;
    var x = checkPalindromeForAllFormats(nextDate);
    if(x){
        break;
    }
    nextDate = getNextDate(nextDate);
 }
 return[count,nextDate];
}  //gives next palindrome date if the given date is not a palindrome and also gives the count of days from the current date to the palindrome date
function previousPalindromeDate(date){
    //=> my exercise
}

var birthDate = document.querySelector("#input-date");
var showButton = document.querySelector("#show-btn");

function clickHandler(){
    var bdayStr = birthDate.value;

    if(bdayStr!=0){
        var listOfDate = bdayStr.split('-');
        console.log(listOfDate);
    }

}

showButton.addEventListener('click',clickHandler)

