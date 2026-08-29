class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let res = 0;
        let stack = [];
        for(let i = 0; i< operations.length; i++){
            let r = stack.length -1;
            if(operations[i] === "+"){
                stack.push(stack[r]+ stack[r-1])
              
            } else if (operations[i] === "C"){
                stack.pop();
            }else if(operations[i]=== "D"){
                stack.push(stack[r]* 2)
            }else{
                stack.push(parseInt(operations[i]));

            }
            
        }

        for(let i=0; i< stack.length; i++){
            res +=stack[i];
        }
        return res;

    }
}
