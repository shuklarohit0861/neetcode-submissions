class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
          let count = {};
          let maxLength  = 0;
          let l = 0
          let maxCount = 0
          for(let r = 0; r < s.length; r++){
            count[s[r]] = (count[s[r]] || 0) + 1;
            maxCount = Math.max(count[s[r]], maxCount)
            while(((r-l + 1) - maxCount) > k){
                count[s[l]] -= 1;
                l += 1;
            }
            maxLength = Math.max(r-l + 1 , maxLength)

          }
          return maxLength;
    }
}
