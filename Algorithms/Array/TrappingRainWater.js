/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const lmax = [], rmax = [];  
let max = height[0];
height.forEach( item  => {
  max = Math.max( max , item );
  lmax.push(max);
  rmax.push(0);
})

max = height[height.length - 1];
for(let i = height.length - 1; i >= 0; i--){
  max = Math.max( max , height[i] );
  rmax[i] = max;    
}
let sum = 0;
for( let i = 0; i < height.length; i++ ){
  sum += Math.min( lmax[i] , rmax[i] ) - height[i];
}
return sum;
};