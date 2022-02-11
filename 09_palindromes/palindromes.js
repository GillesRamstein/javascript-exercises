const palindromes = function (string) {
    const cleaned = string.replace(/\W/g, "").toLowerCase()
    const reversed = cleaned.split("").reverse().join("")
    return cleaned === reversed
};

// Do not edit below this line
module.exports = palindromes;
