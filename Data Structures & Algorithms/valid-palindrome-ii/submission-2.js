class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length -1;
  

        while(l < r){
            if(s[l] !== s[r] ){
                return (this.isPalindrome(s,l+1 ,r ) || this.isPalindrome(s, l, r-1))
            }
            l++;
            r--;
        }
        return true;


    }

    isPalindrome(s, l, r){
        let left = l;
        let right = r;
        while(left < right){
            if(s[left]!== s[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
