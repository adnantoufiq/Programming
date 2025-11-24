function stringPalindrome(str) {
    const n = str.length;
    if( str === str.split('').reverse().join('') ) {
        return true;
    } else {
        return false;
    }
}

const str = 'madam';
console.log(stringPalindrome(str));


function stringPalindromeLoop(str) {
    const n = str.length;

    let secondString = '';
    for(let i = n - 1; i >= 0; i--) {
        secondString += str[i];
    }

    if( str === secondString ) {
        return true;
    } else {
        return false;
    }

}

const str2 = 'madam';
console.log(stringPalindromeLoop(str2));