class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let left = 0;
        let right = people.length - 1;
        let boat = 0;

        while (left <= right) {
            let rem = limit - people[right];
            right--;
            boat++;
            if (left <= right && rem >= people[left]) {
                left++;
            }
        }
        return boat;
    }
}
