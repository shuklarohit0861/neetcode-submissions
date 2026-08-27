class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        let p1 = 0;
        let res = '';

        while(word1.length> p1 && word2.length > p1){
            res += word1[p1]+ word2[p1]
            p1++;
        }
        while(p1 < word1.length){
            res += word1[p1]
            p1++
        }
        while(p1 < word2.length){
            res += word2[p1]
            p1++
        }
        return res;
    }
}
