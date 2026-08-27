class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heigth){
    let left = 0;
    let right = heigth.length - 1;
    let maxWater = 0;

    for(let i = 0; i < heigth.length; i++){
        if(left >= right) break;
       
        let minH = Math.min(heigth[left] , heigth[right]);

        let water = minH * (right - left);
    
        maxWater = Math.max(water, maxWater);
   
        if(heigth[left]< heigth[right]){
            left++
        }else {
            right--
        }
    }
  
    return maxWater;


}

}
