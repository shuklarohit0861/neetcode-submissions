class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let left = 0;
        let right = s.length -1;
       while(left <= right){
        let lValue = s[left];
        let rValue = s[right];
        s[left] = rValue;
        s[right] = lValue;
        left++;
        right--;
       }
       return s;
    }
}
