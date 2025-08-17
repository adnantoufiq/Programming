function assignCookies(greeds, sizes) {

    const g = greeds.sort((a, b) => a - b);
    const s = sizes.sort((a, b) => a - b); 

    let left = 0
    let right = 0
    let ans = 0

   
    while (left< greeds.length && right < sizes.length) {
        if (g[left] <= s[right]) {
            ans++
            left++
            right++
        } else {
            right++
        }
        
    }
    return ans;
}

console.log(assignCookies([1,5,3,3,4], [4,2,3,1,2,1]));