class Solution {
public:
    vector<int> asteroidCollision(vector<int>& asteroids) {
        std::vector<int> st; // Acts as our stack
        
        for (int a : asteroids) {
            bool destroyed = false;
            
            // A collision only happens if the top of the stack moves RIGHT (> 0)
            // and the current asteroid moves LEFT (< 0)
            while (!st.empty() && a < 0 && st.back() > 0) {
                int diff = a + st.back();
                
                if (diff > 0) {
                    // Top stack asteroid is bigger; current asteroid explodes
                    destroyed = true;
                    break;
                } else if (diff < 0) {
                    // Current asteroid is bigger; top stack asteroid explodes
                    st.pop_back();
                } else {
                    // Both are equal size; both explode
                    destroyed = true;
                    st.pop_back();
                    break;
                }
            }
            
            // If current asteroid survived all collisions, push it onto the stack
            if (!destroyed) {
                st.push_back(a);
            }
        }
        
        return st;
        
    }
};