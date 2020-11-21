// Fint the median of two sorted arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = 0 , m2 = 0;
    let totalSize = nums1.length + nums2.length;
    let maxCnt = Math.floor((totalSize) / 2);
    let cnt = 0;
    let i = 0 , j = 0;
  
    while( cnt <= maxCnt){
     m2 = m;
       if(i != nums1.length && j != nums2.length) 
       {  
         m = (nums1[i] > nums2[j]) ? nums2[j++] : nums1[i++];  
       }  
       else if(i < nums1.length) 
       {  
          m = nums1[i++];  
       }  
        else
       {  
          m = nums2[j++];  
       }  
        cnt++;
    }  
    return totalSize % 2 === 0  ? (m + m2) / 2 : m ;
};
  
  console.log(medianOfTwoArrs( [1,3] ,[2] ));
  console.log(medianOfTwoArrs( [1] ,[] ));
  console.log(medianOfTwoArrs( [1,2] ,[3,4] ));