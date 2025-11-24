function strReverse(str) {
    let n = str.length
    let reversedStr = ''
    
    for (let i = n - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr

}

const char = 'word'
console.log(strReverse(char));



function strReverseFunction(str) {
    return str.split('').reverse().join('')
}

console.log(strReverseFunction(char));