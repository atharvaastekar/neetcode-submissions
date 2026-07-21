class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let just = new Set()
        for (const num of nums) {
            if(just.has(num)) {
                return true
            }
            just.add(num)
        }
    return false
    }
}
