function firstNonRepChar(str) {
    const charCount = {}

    let n = str.length

    for (let i = 0; i < n; i++) {
        const char = str[i];
        // charCount.set(char, (charCount.get(char)|| 0) + 1);
        charCount[char] = (charCount[char]||0) + 1;
    }

   for (let i = 0 ; i<n ; i++){
    const char = str[i];
    if (charCount[char] === 1) {
        return char;
    }
   }

    return null; // If there is no non-repeating character
}

const str = 'swiss';
console.log(firstNonRepChar(str));