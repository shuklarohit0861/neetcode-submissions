class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights);
        let r = weights.reduce((acc, curr) => {
            return (acc += curr);
        }, 0);

        function noOfShip(cap) {
            let currentCap = cap;
            let ship = 1;
            for (let w of weights) {
                if (currentCap - w < 0) {
                    ship += 1;
                    currentCap = cap;
                    if (ship > days) {
                        return false;
                    }
                }
                currentCap -= w;
            }
            return true;
        }

        let res = r;
        while (l <= r) {
            let cap = Math.floor((r + l) / 2);
            let noDay = noOfShip(cap);
            if (noDay) {
                res = Math.min(res, cap);
                r = cap - 1;
            } else {
                l = cap + 1;
            }
        }
        return res;
    }
}
