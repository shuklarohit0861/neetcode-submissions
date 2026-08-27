class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let x = m -1;
        let y = n -1;
        let z = nums1.length -1;

       while(y >= 0){
        if(x >= 0 && nums1[x] > nums2[y]){
            nums1[z--] = nums1[x--]
        } else {
            nums1[z--] = nums2[y--]
        }
       }
    }
}
