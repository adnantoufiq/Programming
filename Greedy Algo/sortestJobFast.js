function sjf(arr) {
    arr.sort((a,b) => a-b)
    let n = arr.length

    let time = 0
    let waitingTime = 0

    for (let i = 0 ; i<n ; i++) {   
        time += arr[i]
        waitingTime += time

    }
    return waitingTime/n

}

console.log(sjf([4,2,8,6,1,3]))


// time = 0 + 1 = 1, time = 1 + 2 = 3, time = 3 + 4 = 7, time = 7 + 6 = 13, time = 13 + 8 = 21
// waitingTime = 0 + 1 = 1 , waitingTime = 1+3 =4 , waitingTime = 4 + 7 = 11
