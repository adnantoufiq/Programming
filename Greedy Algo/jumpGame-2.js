function jumpGame( index, arr){

    if (index >= arr.length - 1) {
        return 0
    }

    let min = Infinity
    for (let i = 1; i <= arr[index]; i++) {
        const jump = Math.min(jumpGame(index + i, arr+1), min)
        min = jump
       
    }
    return min

}

const arr = [2,3,1,1,4]
const n = arr.length
console.log(jumpGame(n, arr))