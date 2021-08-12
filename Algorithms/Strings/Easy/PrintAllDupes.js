var printAllDupes = function(string) {
  
    const counterMp = new Map();
    for( let i = 0; i < string.length; i++){
      let value = 1;
      if(counterMp.has(string[i])){
        value = counterMp.get(string[i]) + 1;
      }
      counterMp.set( string[i] , value)
    }
    
  for (const [key, value] of counterMp.entries()) {
    if(value > 1){
      console.log(`${key} repeated ${value} times`);      
    }
  }
    
};


printAllDupes("geeksforgeeks");