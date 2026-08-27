class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         let res = 0;
      let hasSet = new Set(nums);

      for(let num of hasSet){
        if(!hasSet.has(num -1)){
            let length = 1;
            while(hasSet.has(num+ length)){
                length++
            }
            res = Math.max(res, length)
             
        }
      }
      
      return res;  
    }
}
