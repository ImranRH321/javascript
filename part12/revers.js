// let chair = 5 ;
// let table = 6 ;
// let bed = 10 ;

// function quentaty (chairQuentity, tableQuentity, bedQuentity){
  
//     let chair = 4 ;
//     let table = 6 ;
//     let bed  = 10 ;

//     let chairAll = chair * chairQuentity ;
//     let tableAll = table * tableQuentity ;
//     let bedAll = bed * bedQuentity ;
//   console.log(chairAll,tableAll, bedAll);
//     var total = chairAll + tableAll + bedAll 
           
//     return  total ;
// }

// let need = quentaty(1,1,1)
// console.log(need);


// foo , bar , foobar ?
 /* 
for(let j = 1 ; j <= 50; j++){
    
    if(j % 3 == 0 && j % 5 == 0){
        console.log('FooBarr');
    }

    if(j % 3 == 0){
        console.log(j,'Foo');
    }
    if(j % 5 == 0){
        console.log(j,'bar');
    }
    console.log(j);
} */





// let myString = 'helo world This clien side'

//  function reversed(myString){
  
//      let reText = '';
//     for(const rever of myString){
//         // console.log(rever); 
//         reText = rever + reText ;
//     }
//     return reText;
//  }

//  var rv = reversed(myString) 
//  console.log(rv);

var person = ['imran','sagor','gogle','facebook','sagor']

let result = [0]
for(let i = 0; i < person.length; i++){
    var ele = person[i]
    if(result.indexOf(ele) == -1){
        result = ele
        console.log(result);
    }
}