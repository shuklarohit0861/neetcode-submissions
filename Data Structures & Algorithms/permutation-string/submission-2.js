class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length){
            return false;
        }
        let matches = 0;
        let aCharCode = 'a'.charCodeAt(0);

        let count1 = new Array(26).fill(0);
        let count2 = new Array(26).fill(0);



        for(let i = 0; i < s1.length; i++){
            count1[s1.charCodeAt(i) - aCharCode] += 1;
            count2[s2.charCodeAt(i) - aCharCode] += 1;
        }

        for(let i = 0; i < count1.length; i++){
            if(count1[i] === count2[i]){
                matches++;
            }
        }

        let l =0;
        for(let r =s1.length; r < s2.length; r++){
            if(matches === 26) return true;
             let index = s2.charCodeAt(r) -aCharCode;
            count2[index] += 1;

            if(count2[index] === count1[index]){
                matches++;
            }else if(count2[index] - 1 === count1[index]){
                matches--;
            }
            
            let index2 = s2.charCodeAt(l) - aCharCode;
            count2[index2] -= 1;

            if(count1[index2] === count2[index2]){
                matches++;
            }else if(count2[index2]+ 1 === count1[index2]){
                matches -= 1;
            }
            l++;
        }
        return matches === 26;
    }
}
