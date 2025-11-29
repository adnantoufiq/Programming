function maxSubArraySum(nums){
    let max = nums[0]
    const n = nums.length

    for(let i = 0 ; i<n; i++){
        let sum = 0
        for(let j = i; j<n; j++){
            sum += nums[j]
            max = Math.max(max, sum)
        }
    }
    return max

}

const arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArraySum(arr))