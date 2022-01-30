const reverseString = function(string) {
    const chars = string.split("");
    let reversed = ""
    for (const char of chars) {
        reversed = char + reversed;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
