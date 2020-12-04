// Container with Most Water
// Given n non-negative integers a_1, a_2, ..., a_n  where each represents a point at coordinate  (i, a_i) . 
// ‘ n ‘ vertical lines are drawn such that the two endpoints of line i is at  (i, a_i)  and (i, 0).
// Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// The program should return an integer which corresponds to the maximum area of water that can be contained 
// (maximum area instead of maximum volume sounds weird but this is the 2D plane we are working with for simplicity).

// Note: You may not slant the container.

// Input: array = [1, 5, 4, 3]
// Output: 6
// Explanation : 
// 5 and 3 are distance 2 apart. 
// So the size of the base = 2. 
// Height of container = min(5, 3) = 3. 
// So total area = 3 * 2 = 6

const ContainerWithMostWater = ( A ) => {
      let area = 0;
      let st = 0,
        end = A.length - 1;
      while (st < end) {
        area = Math.max(area, Math.min(A[st], A[end]) * (end - st));
        A[st] < A[end] ? st++ : end--;
      }
      return area;
}

console.log(ContainerWithMostWater([1, 5, 4, 3]));