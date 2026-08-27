class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
         const n = nums.length;

    const pref = [];
    const suff = [];
    let prefValue = 1;
   let suffValue = 1;

    for(let i = 0; i< nums.length; i++){
        pref[i] =  prefValue;
        prefValue = nums[i]* prefValue;

    }



    for(let i = n-1; i >= 0; i--){
        suff[i] = suffValue;
        suffValue = suffValue * nums[i];
    }

    let res = []
    
    for(let i = 0; i < n ; i++){
        res[i] = pref[i]* suff[i]

    }
    return res;

    }
}
