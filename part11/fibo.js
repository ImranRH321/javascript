// 0 , 1, 1, 2, 3, 4, 5, 6, 7 , 8, 9, 10

// 5th = 4th + 3th
// 4th = 3th + 2 th 
// 3rd = 2nd = 1nd 

// nth= (n-1) th + (n-2) th
// ith = (i-1) th + (i - 2) th

// let fibo = [0,1]

// for(let i = 2; i <5; i++){

//     fibo[i] = fibo[i - 1] + fibo[ i - 2]
// }
// console.log(fibo);


function fiboNasci(number){
     if(typeof number !== 'number'){
       console.log('Please give a number');
   }
   if( number < 2){
       console.log('plase enter your positive number');
   }
    let fibo = [0,1]
    for(let  j = 2 ; j < number; j++){
      fibo[j] = fibo[j - 1] + fibo[j - 2]
    }
    return fibo
}

var fiboNumber = fiboNasci(-3)
console.log(fiboNumber);