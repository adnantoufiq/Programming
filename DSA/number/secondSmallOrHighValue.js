function secondSmallest(arr) {

    let n = arr.length;
    if(n<2) return -1;

    let first = Infinity;
    let second = Infinity;

    for (let i = 0; i<n; i++){

      if(arr[i]<first){
        second = first;
        first = arr[i];
      } else if(arr[i]<second && arr[i]!==first){
        second = arr[i];
      }    
    }
    
    return second
}

const arr = [12, 3, 5, 7, 19];;
console.log(secondSmallest(arr)); // Output: 5