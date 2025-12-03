function removeDuplicate(arr) {
    let n = arr.length;
    let i = 0
    for(let j = 1; j<n ; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr [j]
        }
    }

    return arr.slice(0, i+1);

}

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicate(arr));

function removeDuplicate1(arr) {
    return [...new Set(arr)];
}

const arr1 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicate1(arr1));