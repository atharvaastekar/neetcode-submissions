class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let str of strs) {
            let array = new Array(26).fill(0);
            for (let s of str) {
                array[s.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const key = array.join(',')
            if(!res[key]) {
                res[key] = [];
            }
            res[key].push(str);
        }
        return Object.values(res);
    }
}
