// const fibonacci = function(a) {
//     if (a < 0) return "OOPS"
//     let prev = 1
//     let current = 1
//     let result = 1
//     for (let i=2; i<a; i++) {
//         result = prev + current
//         prev = current
//         current = result
//     }
//     return result
// };

const fibonacci = function(a) {
    // f(0) = 1
    // f(1) = 1
    // f(n) = f(n-2) + f(n-1)
    if (a < 0) return "OOPS"
    a = Number(a)
    if (a <= 1) return a
    return fibonacci(a-2) + fibonacci(a-1)
};


// Do not edit below this line
module.exports = fibonacci;
