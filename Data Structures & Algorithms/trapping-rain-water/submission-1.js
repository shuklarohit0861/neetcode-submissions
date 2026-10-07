class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */

    trap(height) {
        if(!height || height.length === 0){
            return 0;
        }
        let len = height.length;
        let maxLeft = Array(len).fill(0);
        let maxRight = Array(len).fill(0);
        let currMax = 0;
        for (let i = 0; i < height.length - 1; i++) {
            currMax = Math.max(currMax, height[i]);
            maxLeft[i + 1] = currMax;
        }
        currMax = 0;
        for (let i = len - 1; i > 0; i--) {
            currMax = Math.max(currMax, height[i]);
            maxRight[i - 1] = currMax;
        }

        let waterLevel = Array(len).fill(0);

        for (let i = 0; i < len; i++) {
            let minLR = Math.min(maxLeft[i], maxRight[i]);
            let wl = minLR - height[i];
            if (wl < 0) {
                waterLevel[i] = 0;
            } else {
                waterLevel[i] = wl;
            }
        }
        let result = 0;

        for (let i = 0; i < waterLevel.length; i++) {
            result = result + waterLevel[i];
        }

        return result;
    }
}
