class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a ,b) => a -b);
        
        
        for(let i = 0; i < nums.length -2 ; i++){
           if(nums[i]> 0) break;
            if(i > 0 && nums[i] === nums[i -1]) continue;
            let a = nums[i]
            let l = i +1;
            let r = nums.length -1;
            while(l < r){
                const currSum = a + nums[l]+ nums[r];
                if(currSum === 0){
                    res.push([a, nums[l], nums[r]]);
                    while(l< r && nums[l] === nums[l+1]){
                        
                            l++;
                    }
                    while(l < r && nums[r] === nums[r-1]){
                        r--
                    }
                    l++
                    r--
                }else if ( currSum < 0) {
                    l++

                }else {
                    r--;
                }
            }

        }
        return res;
    }
}
