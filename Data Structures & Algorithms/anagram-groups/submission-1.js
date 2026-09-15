class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {

        }
        

        for(let i = 0; i < strs.length; i++){
            let str = strs[i]
            let arr = new Array(26).fill(0);
            for(let j = 0; j < str.length; j++){
                arr[str[j].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            let v = arr.join(',');
            if(!obj[v]){
                obj[v] = []

            }
           obj[v].push(str)
        }
       let result = Object.values(obj)

       return result
    
    }
}
