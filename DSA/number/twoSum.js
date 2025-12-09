function twoSum(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];

        if(numMap.has(complement)){
            return `${numMap.get(complement)} and ${i} and values are : ${complement} + ${nums[i]} = ${target}`;
        }

        numMap.set(nums[i], i);
    }

    return numMap;
}

const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target));



