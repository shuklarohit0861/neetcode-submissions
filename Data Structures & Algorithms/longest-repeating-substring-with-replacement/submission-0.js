class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let maxFreq = 0;
        let res = 0;
        let count = {}
        for(let r = 0; r < s.length; r++){
            count[s[r]] = 1 + (count[s[r]] || 0);
            maxFreq  = Math.max(count[s[r]], maxFreq);

            while(r - l+ 1 - maxFreq > k){
                count[s[l]] = count[s[l]] -1;
                l++
            }

            res = Math.max(res, r-l +1)


        }
        return res;

    }
}
