class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        function bananaEathingHours(k) {
            let time = 0;
            for (let i = 0; i < piles.length; i++) {
                time += Math.ceil(piles[i] / k);
            }
            return time;
        }

        while (l <= r) {
            let k = Math.floor((r + l) / 2);
            let totalTime = bananaEathingHours(k);
            if (totalTime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }

        return res;
    }
}
