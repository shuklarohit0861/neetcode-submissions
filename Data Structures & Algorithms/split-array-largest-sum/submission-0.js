class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        function canSplit(largest){
            let currSum = 0;
            let subArrs = 1;

            for(let i = 0; i< nums.length;i++){
                currSum += nums[i]
                if(currSum > largest){
                    subArrs++;
                    if(subArrs > k) return false;
                    currSum = nums[i]
                }
            }
            return true; 

        }

        let l = Math.max(...nums);
        let r = nums.reduce((a, b) => a + b , 0);
        let res = r;

        while(l <= r){
            let mid = l + Math.floor((r-l)/2);
            if(canSplit(mid)){
                res = mid;
                r = mid -1;
            }else {
                l = mid + 1;
            }
        }

        return res;
        
    }

  
}
