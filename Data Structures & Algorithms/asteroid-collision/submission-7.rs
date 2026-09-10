impl Solution {
    pub fn asteroid_collision(asteroids: Vec<i32>) -> Vec<i32> {
        let mut st: Vec<i32> = Vec::new();

        for &a in &asteroids {
            let mut destroyed = false;

            // A collision only happens if the top of the stack moves RIGHT (> 0)
            // and the current asteroid moves LEFT (< 0)
            while !st.is_empty() && a < 0 && *st.last().unwrap() > 0 {
                let last_asteroid = *st.last().unwrap();
                let diff = a + last_asteroid;

                if diff > 0 {
                    // Top stack asteroid is bigger; current asteroid explodes
                    destroyed = true;
                    break;
                } else if diff < 0 {
                    // Current asteroid is bigger; top stack asteroid explodes
                    st.pop();
                } else {
                    // Both are equal size; both explode
                    destroyed = true;
                    st.pop();
                    break;
                }
            }

            // If current asteroid survived all collisions, push it onto the stack
            if !destroyed {
                st.push(a);
            }
        }

        st

    }
}
