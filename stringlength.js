arr= ["a", 
"abc", 
"cbd", 
"zzzzzz", 
"a", 
"abcdef", 
"asasa", 
"aaaaaa"];
var new_array = [];
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