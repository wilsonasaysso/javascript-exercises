const palindromes = function (str) {
    const string = str.replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const stringNew = string.toLowerCase();
    const word = stringNew.split('');
    const wordReverse = word.reverse();

    for (let i=0; i < word.length; i++){
        for (let j=0; j < wordReverse.length; j++){
            if (word[i] != wordReverse[j]) {
                return false;
            } else continue;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
