/*
for val in valuesToRemove:
    idsToRemove = findAllIndices(of val, in array)
    for idx in idsToRemove:
        array.delete(idx)
*/

function findIndicesOf(array, value) {
    let indices = []
    let index = -1
    while (true) {
        index = array.indexOf(value, index+1)
        if (index == -1) {
            return indices
        }
        indices.push(index)
    }
}

function removeValues(array, ids) {
    for (const idx of ids) {
        array.splice(idx, 1)
    }
    return array
}

function removeFromArray (array, ...valuesToRemove) {
    console.log(array, valuesToRemove)
    for (const value of valuesToRemove) {
        indicesToRemove = findIndicesOf(array, value)
        console.log(value, indicesToRemove)
        array = removeValues(array, indicesToRemove)
        console.log(array)
    }
    return array
}

// Do not edit below this line
module.exports = removeFromArray
