class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(nums) {
            let profile = 0;
    for(let i = 1; i< nums.length;i++){
        if(nums[i] > nums[i-1]){
            console.log(nums[i], nums[i-1])
            profile = profile + (nums[i] - nums[i-1]);
        }

    }
    return profile;
    }
}
