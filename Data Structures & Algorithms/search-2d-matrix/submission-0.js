class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let r = (matrix[0].length * matrix.length) - 1;
        while(l <= r){
            let mid = Math.floor((r+ l)/2);
            let row = Math.floor(mid / matrix[0].length);
            let col = mid % matrix[0].length; 
            if(matrix[row][col] === target){
                return true;
            }
            if(matrix[row][col]< target){
                l = mid + 1;
            }else if(matrix[row][col]> target){
                r = mid - 1;
            }
        }
        return false;
    }
}
