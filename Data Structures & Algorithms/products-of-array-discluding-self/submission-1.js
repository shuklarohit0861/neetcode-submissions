class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
         const n = nums.length;

    const pref = [];
    let prefValue = 1;
    let suffValue = 1;

    for(let i = 0; i< nums.length; i++){
        pref[i] =  prefValue;
        prefValue = nums[i]* prefValue;

    }



    for(let i = n-1; i >= 0; i--){
        pref[i] *= suffValue;
        suffValue = suffValue * nums[i];
    }

    return pref;
    
  

    }
}
