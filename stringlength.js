arr= ["young", 
"yooooooung", 
"hot", 
"or", 
"not", 
"come", 
"on", 
"fire", 
"water", 
"watermelon"];
var new_arr = [];
 var max_len =0;
 var max_str = [];
 
 for(i=0;i<arr.length ; i++){
     
    if(arr[i].length >= max_len) {
           max_len = arr[i].length;            
     }
   
  }

  for (i=0 ; i< arr.length ; i++){
      if(arr[i].length == max_len){
          max_str.push(arr[i]);
      }
  }
  console.log(max_str);