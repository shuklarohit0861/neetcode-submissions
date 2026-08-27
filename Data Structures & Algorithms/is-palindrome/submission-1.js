class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let s1 = s.toLowerCase();
        let l = 0;
        let r = s.length-1;
        let reg = /[a-zA-Z0-9]/
        while(l < r){
            if(!reg.test(s[l])){
                l++;
                continue;
            }
            if(!reg.test(s[r])){
                r--;
                continue;
            }
            if(s1[l] === s1[r]){
                l++
                r--;
            }else {
                return false;
            }
        }
        return true;
    }
}
