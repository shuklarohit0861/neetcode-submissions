class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let res = [];
        let map = {};

        for(let i = 0; i < nums.length; i++){
            let sub = target - nums[i];
            if(map[nums[i]]>= 0){
                res = [map[nums[i]], i];
                break;
            }else {
                map[sub] = i;
            }
        }
        return res;


    }
}
