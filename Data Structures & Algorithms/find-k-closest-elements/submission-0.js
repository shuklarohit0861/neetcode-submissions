class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
const n = arr.length;
        let idx = 0;
        for (let i = 1; i < n; i++) {
            if (Math.abs(x - arr[idx]) > Math.abs(x - arr[i])) {
                idx = i;
            }
        }

        const res = [arr[idx]];
        let l = idx - 1,
            r = idx + 1;

        while (res.length < k) {
            if (l >= 0 && r < n) {
                if (Math.abs(x - arr[l]) <= Math.abs(x - arr[r])) {
                    res.push(arr[l--]);
                } else {
                    res.push(arr[r++]);
                }
            } else if (l >= 0) {
                res.push(arr[l--]);
            } else if (r < n) {
                res.push(arr[r++]);
            }
        }

        return res.sort((a, b) => a - b);
    }


}
