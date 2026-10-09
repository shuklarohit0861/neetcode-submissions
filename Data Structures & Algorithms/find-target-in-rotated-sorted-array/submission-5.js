class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l < r) {
            const m = l + Math.floor((r - l) / 2);
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        const p = l;
        const result = this.binarySearch(nums, target, 0, p -1);
        if(result !== -1){
            return result;
        }

        return this.binarySearch(nums, target, p, nums.length - 1);
    }

    binarySearch(nums, target, left, right) {
        while (left <= right) {
            const m = Math.floor((left + right) / 2);
            if (nums[m] === target) {
                return m;
            }
            if (nums[m] < target) {
                left = m + 1;
            } else {
                right = m - 1;
            }
        }
        return -1;
    }
}
