function longestSubstringWithNonRepChar(str) {
    const n = char.length
    const map = new Map()
    let newStr = ''

    for (let i = 0 ; i<n; i++)
    {
        const ch = char[i]
        if(map.has(ch)){
            map.set(ch, map.get(ch) + 1)
            break
        } else {
            map.set(ch, 1)
            newStr += ch
        }
    }
   
    let count = newStr.length

    return {newStr, count}


}


const char = 'abcdab';

console.log(longestSubstringWithNonRepChar(char));