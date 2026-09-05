class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = []
        for(let i = 0; i< s.length; i++){
            if(s[i] ===']'){
                let sub = ''
                while(stack[stack.length -1] !== '['){
                    sub = stack.pop() + sub;
                }
                stack.pop()
                let multi = ''
                while(stack.length > 0 && !isNaN(stack[stack.length -1])) {
                    multi = stack.pop() + multi;
                }
                stack.push(sub.repeat(parseInt(multi, 10))) 
            } else {
                stack.push(s[i])
            }
        }
        return stack.join('')
    }

  
}
