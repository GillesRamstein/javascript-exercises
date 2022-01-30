const sumAll = function (a, b) {
    if (a < 0 || b < 0) {
        return "ERROR"
    }
    if (typeof (a) != "number" || typeof (b) != "number") {
        return "ERROR"
    }
    if (a > b) {
        const tmp = a
        a = b
        b = tmp
    }
    return (a + b) * (b - a + 1) / 2
};

// Do not edit below this line
module.exports = sumAll;
