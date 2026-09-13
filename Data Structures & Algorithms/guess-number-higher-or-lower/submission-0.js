/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l = 0;
        let r = n;
        while(l <= r){
            let mid = l + Math.floor((r-l)/2);
            let v = guess(mid);
            if(v < 0){
                r = mid-1;
            }else if (v > 0){
                l = mid + 1;
            }else {
                return mid;
            }
        }
        
    }
}
