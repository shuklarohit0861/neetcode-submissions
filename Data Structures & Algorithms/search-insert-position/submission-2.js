class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l = 0;
        let r = nums.length - 1;
        let res = nums.length;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            if (nums[mid] === target) {
                 return mid;
            }
            if (nums[mid] < target) {
                l = mid + 1;
            } else if (nums[mid] > target) {
                r = mid - 1;
                res = mid;
            }
        }
        return res;
    }
}
