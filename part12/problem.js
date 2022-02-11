/* 
var number =  [2,3,4,5,6] ;
function lagestNumber(peramiter){
     
    let max = [0]
    for(let j = 0; j < peramiter.length; j++){
       let element = peramiter[j] 
       if(element > max){
         max = element
        
       }
    }
   return max 
}
var lageB = lagestNumber(number)
console.log(lageB); */


/* var number = [1,2,3,4,5,6] 

function small(number){
    let min = 0 ;
    for(let x = 0; x < number.length; x++){
        var index = number[x]
         if(index < min){
             min = index
         }
    }
    return min 
}
var sm = small(number) */


// doblicate 

var student = ['auntor','kuntor','nova', 'butpar']


function deplicate(student){
    let depli = [0,1,2,3] ;
    // for(let j = 0 ; j < student.length; j++){
    //     let allElement = student[j] 
    //     if(depli.indexOf(allElement)== -1){
    //        depli.push(allElement)
    //     }
    // }

     for(const names of student ){
        //  console.log(names); 
         if(depli.indexOf(names) == -1){
           depli.push(names)
         } 
     }

    return depli
}
let str = deplicate(student)
console.log(str);