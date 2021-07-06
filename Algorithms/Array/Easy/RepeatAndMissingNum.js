//Repeat and Missing Number Array
//You are given a read only array of n integers from 1 to n.

// Input:[3 1 2 5 3] 
// Output:[3, 4] 

//O(N) Time + O(N) space  solution 
//NOTE : Doesn't work with Big Integers because javascript XD

const repeatAndMissingNo = ( A ) =>{
    let [ a , b ] = [ -1 , -1];
    const samplArr = [];
    A.forEach((item) => {
        if (!samplArr[item]){
            samplArr[item] = 1;    
        } 
        else{
            samplArr[item] += 1;     
        }
    });

    for (let index = 1; index < samplArr.length; index++) {
      if(samplArr[index] > 1){
          a = index;
      }
      if(! samplArr[index] ){
          b = index;
      }
    }
    return [a,b];
}

console.log(repeatAndMissingNo([3,1,2,5,3]));

