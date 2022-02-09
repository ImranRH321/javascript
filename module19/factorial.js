/* 
5! = 5 X 4 X 3 X 2 X 1 ;
4! = 4 X 3 X 2 X 1 ;
3! = 3 X 2 X 1 ;

 */


// var factorial  = 1;

// for(j = 1 ; j <= 6; j++){
//      console.log(j);
//     factorial = factorial * j ;
// }
// console.log(factorial);

// var fac = 1 ;
// for(var s = 1 ; s <= 4; s++){
//      fac *= s
//      console.log(s);
// }
// console.log(fac);




// function factorialName (fac){
//     let factorial = 1 ;
//    for( let n = 1; n < fac; n++){
//        factorial *= n
//    }
//    return factorial;
// }
// var anyFac = factorialName(6)
// console.log(anyFac);


// boro take choto facktorial ?
 
// function fukFacktorial(number){
//      let factorial = 1 ;
//      for(let j = number ; j >= 1; j--){
//          factorial *= j
//      }
//      return factorial ;
// }

// var fac = fukFacktorial(4)
// console.log(fac);



// function getFac(number){
//   let facktorial = 1 ;
//   var x = 1 ;
//   while(x <= number){
//     facktorial *= x ;
//     // console.log(facktorial);
//     x++
//   }
 
//   return facktorial ;
// }
// var fac = getFac(5)
// console.log(fac);


// function getFactorial(number){
//     let factorial = 1; 
//     let z = number ;
//     while(z >= 1){
//       factorial = factorial * z
//         z--
//     }
//     return factorial
// }

// var facto = getFactorial(5)
// console.log(facto);



// jokon akta function nijer body ar bitor nije ke call kore take rekarson bole 

// !6 = 6 X 5
// !n = n * (n-1)! 
/* 
function factorialRecursion(n){
   
      if(n == 1){
          return 1
      }
    return n * factorialRecursion(n-1) 
}

var fac = factorialRecursion(4)
console.log(fac);
 */


// 7! 
// !n = n * (n-1)

/* function factorialRecurstion(n){
   
    if(n == 1){
        return 1
    }
    return n * factorialRecurstion(n - 1)
}

const factorial = factorialRecurstion(4)
console.log(factorial); */


// Simple JavaScript debug


// function factorials(number){ 
//     // console.log(number);
//   let factorial = 1 ;
//     for(var y = 1; y <= number ; y++){
//         factorial = factorial * y ; 
//         // console.log(factorial);
//     }
//     return factorial
// }

// var facto = factorials(5)
// console.log(facto);