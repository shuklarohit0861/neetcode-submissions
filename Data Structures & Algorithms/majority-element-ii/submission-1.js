class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
       const hasObj = {}
        for(let i = 0; i < nums.length; i++){
            hasObj[nums[i]] = (hasObj[nums[i]] || 0) + 1;
        }
         const res = []
        for(let n in hasObj){
         if(Math.floor(nums.length/3) < hasObj[n]){
            res.push(parseInt(n))
         }
        }
        return res;
    }

}