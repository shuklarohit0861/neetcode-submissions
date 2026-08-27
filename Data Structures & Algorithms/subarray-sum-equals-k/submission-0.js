class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let map = {0: 1};
        let res = 0;
        let currSum = 0;

        for(let i = 0; i < nums.length; i++){
            currSum += nums[i];
            let diff = currSum -k;
            if(map[diff]){
                res += map[diff];
            }
            map[currSum] = (map[currSum] || 0) + 1;
        }

        return res;
    }
}
