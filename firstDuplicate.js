//var arr = [2,4,3,5,1];
function firstdublicate(arr){
    for(i=0 ; i<arr.length-1; i++){
        if(arr.lastIndexOf(arr[i])!==i ){
            // console.log(arr[i]);
            return arr[i];
             
        }
        else{
            
            return -1;
        }
    }
  
}

console.log(firstdublicate([2,4,3,5,1]));
console.log(firstdublicate([2,2]));
console.log(firstdublicate([2,1,3,5,3,2]));

//  var num =firstdublicate(arr);
//  console.log(num);


 
