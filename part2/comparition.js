
// > , < , == ,!=  ?

var morsaln = 30;

// if(morsaln == 'Good'){

// }

if(morsaln != 'good'){
   
}

// if(morsaln >= 30){
//    
// }

// 6 Make conditional decision, if-else, comparison

var programer = 50 ;
// if(programer <= 10){
//     console.log(1);
// }
// else if (programer <= 20){
//   console.log(2);
// }
// else if (programer <= 20){
//   console.log(2);
// }
// else if (programer <= 30){
//   console.log(3);
// }
// else if (programer <= 40){
//   console.log(4);
// }
// else if (programer <= 50){
//   console.log(5);
// }

// if(programer > 40){
//     console.log('hi tere');
// }

// Handle multiple conditions, and or

 var auntor = true ;
 var auntorMany = 25000 ;
 var auntorPersonType = 'bad' ; 

 if((auntorPersonType == 'bad' && auntorMany > 20000 ) && auntor != true){
    //  console.log('Good person');
 }
 else{
    //  console.log('BAD');
 }




//  Multi stage condition and nested conditions
 
var dream = 'Caneda' ;
var quality = 'programer' ;
var wating  = true ;
var many = 2000 ;

if((dream != "Japan") && (wating == true)){
    if(many > 1000){
       
        if(quality == 'programer'){
            if(wating !== 'true'){
                console.log('hi there');
            }
        }
        else{
            console.log('longer day');
        }
    }
    else {
        console.log('noting de');
    }
}
else{
    console.log('wating..!');
}