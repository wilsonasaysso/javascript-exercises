const repeatString = function(string, num) {
    if (num < 0){
        return 'ERROR';
    }
    let complete = "";
    for (let i=0; i<num; i++){
        complete += string;
    }
    return complete;
};

// Do not edit below this line
module.exports = repeatString;
