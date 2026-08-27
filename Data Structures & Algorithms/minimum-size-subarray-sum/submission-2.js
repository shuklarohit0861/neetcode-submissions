class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let res = Number.MAX_VALUE;
        let l = 0;
        let sum = 0;
        for (let r = 0; r < nums.length; r++) {
            sum += nums[r];

            while (sum >= target ) {
                res = Math.min(r - l + 1, res);
                sum -= nums[l];
                l++;
            }
        }
        return res === Number.MAX_VALUE ? 0 : res;
    }
}
