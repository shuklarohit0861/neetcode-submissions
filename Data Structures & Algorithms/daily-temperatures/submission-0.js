class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = []
        let res  = new Array(temperatures.length).fill(0);

        for(let i = 0; i< temperatures.length; i++){
            let temp = temperatures[i];
            while (stack.length && stack[stack.length - 1].temp < temp) {
                const tempVal = stack.pop();
                res[tempVal.i] = i - tempVal.i;
            }
            stack.push({temp, i});
        }
        return res;
    }
}
