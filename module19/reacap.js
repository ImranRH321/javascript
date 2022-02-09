// feet to inch ------

// var inch = 12 ;
// // var feet = 1 ;
// var myfeet = inch * 2 ;

// console.log(myfeet);

// function inchToFeet(inch){

//     var feet = inch / 12 ;
//     return feet ;
// }
// var convert =  inchToFeet(150)
// console.log(convert);


//  mile to kalometars 

/* var km = 1.60934 ;
var mile = 2 ;
var miles = km * mile;
console.log(miles); */

/* function mileToKm(mile){

    var kalometar = 1.60934 * mile;
    return kalometar ;
}
 */
// console.log(mileToKm(5));

/* function even(number){
  if(number % 2 == 0){
      console.log('even nubmer', number);
  }
  else{
      console.log('this is odd number', number);
  }
  return number
}
var evenNumber = even(6)
console.log(evenNumber); */


// leepYear ----

// function leepYear(year){
//     if(year % 4 == 0){
//         console.log('leepYear', year);
//     }
//     else{
//         console.log('this year is not leepyear ', year);
//     }
//     return year ;
// }
// var isLeepYear = leepYear(2024)


// factorial 

// let factorial = 1;
// for(var x = 1; x <= 4; x++){
//     factorial *= x
// }
// console.log(factorial);


/* 
 increament 
 function factorialName(number){
     let factorial = 1 ;
     for(let x = 1; x <= number; x++){
         factorial *= x ;
     }
     return factorial ;
 }
 let isFacto = factorialName(5)
 console.log(isFacto);
 */


/*
 decrement 
function facktorialName(number){
    let factorial = 1 ;
     for(let j = number; j >= 1 ; j--){
         factorial *= j
     }
     return factorial
}
let isFacto = facktorialName(5)
console.log(isFacto);
 */


// while
/* 
function facktorials(num){
    let factorial = 1;
    var x = 1 ;
    while(x <= num){
        factorial *= x
    x++
    }
   return factorial
}
let facto = facktorials(7)
console.log(facto); */


// decrement  
/*  function fct(nm){

     let facktorial = 1 ;
     var z = nm;
     while(z >= 1){
      facktorial *= z
      z--
     }
     return facktorial ;
 }
 var facto = fct(6)
 console.log(facto); */


// factorial recursion ? 
// !n = n * (n-1)
//  !5 = 5 X 4
function factorialRecursion(n){
   if(n == 1){
       return 1
   }
    return n * factorialRecursion(n - 1)
}

var facto =  factorialRecursion(5)
console.log(facto);