/* 
function inchToFeet (inch){

    var feet = inch / 12 ;

    return feet ;
}

var totalFeed =  inchToFeet(120)
console.log(totalFeed); */



// miles to kilometer
/* 
function mileToKilometer(mile){
    
    var km = mile * 1.60934 ;
    return km ;
}

var miles = mileToKilometer(5)
console.log(miles); */


/* // Check even and odd number using function

function evenNubmer(number){
    // var  even = evenNubmer /2 == 0 ;
    if(number % 2 == 0){
        console.log('even nubmer');
    }
    else{
        console.log('ood nubmer');
    }
    return number
}

console.log(evenNubmer(10));
 */


// odd nubmer 

// function oddNumber(num){
    
//     if(num % 2 == 1){
//         return true
//     }
//    return false ;
// }

// console.log(oddNumber(5));



// Check whether a year is a Leap Year or not

function leepYear(year){
    if(year % 4 == 0){
        console.log(year, 'This is Leep year');
        return true
    }
    return false ;
}

var newYear = leepYear(2024)
console.log(newYear);