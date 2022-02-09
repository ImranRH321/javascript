 
//  var number = 97 ;

//  if((100 >= 90) && 90 <= 100){
//      console.log('A+');
//  }
//  else if(80 >= 70 && (70 <= 80)){
//    console.log('A');
//  }

//  else if((70 >= 60) && (60 <= 70)){
//      console.log('A-');
//  }
//  else if((60 >= 50)&& (50 <= 60)){
//      console.log("B");
//  }
  


//  else{
//      console.log('F');
//  }


const marks = 100 ;

if(marks >= 90 && marks <= 100){
    console.log("A+");
}
else if(marks >= 80 && marks <= 90){
    console.log('A');
}
else if(marks >= 70 && marks <= 79){
    console.log('A-');
}
else if( marks >= 60 && marks <= 69){
    console.log('B');
}
else if(marks >= 50 && marks <= 59){
    console.log('-B');
}
else if(marks >= 40 && marks <= 33){
    console.log('C');
}
else if(marks >= 0 && marks <= 32){
    console.log('fail');
}
else if(marks > 100){
    console.log('invalid number');
}
console.log('You are not student');