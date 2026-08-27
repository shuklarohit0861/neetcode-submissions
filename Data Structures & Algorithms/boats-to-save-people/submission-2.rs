impl Solution {
    pub fn num_rescue_boats(mut people: Vec<i32>, limit: i32) -> i32 {
        people.sort_unstable(); // Faster in-place sort for primitives
        
        let mut left: usize = 0;
        let mut right: usize = people.len();
        let mut boats = 0;

        while left < right {
            right -= 1; // Take the heaviest remaining person
            
            // Check if the lightest person can share this boat
            if left < right && people[left] + people[right] <= limit {
                left += 1;
            }
            
            boats += 1;
        }

        boats

    }
}
