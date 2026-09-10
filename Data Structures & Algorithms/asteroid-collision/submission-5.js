class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let st = [];
        for (let i = 0; i < asteroids.length; i++) {
            let a = asteroids[i];
            while (st.length && a < 0 && st[st.length - 1] > 0) {
                let diff = a + st[st.length - 1];
                if (diff > 0) {
                    a = 0;
                } else if (diff < 0) {
                    st.pop();
                } else {
                    a = 0;
                    st.pop();
                }
            }
            if (a !== 0) {
                st.push(a);
            }
        }
        return st;
    }
}
