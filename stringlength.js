arr= ["a", 
"abc", 
"cbd", 
"zzzzzz", 
"a", 
"abcdef", 
"asasa", 
"aaaaaa"];
v
 var max_length =0;
 var max_str = [];
 
 for(i=0;i<arr.length ; i++){
     
    if(arr[i].length >= max_length) {
           max_length = arr[i].length;            
     }
   
  }

  for (i=0 ; i< arr.length ; i++){
      if(arr[i].length == max_length){
          max_str.push(arr[i]);
      }
  }
  console.log(max_str);