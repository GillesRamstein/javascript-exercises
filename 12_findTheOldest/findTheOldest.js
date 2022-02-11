const findTheOldest = function(array) {
    return array.sort((a, b) => age(a) > age(b) ? -1 : 1)[0]
};

function age(person) {
    if ("yearOfDeath" in person) {
        return person.yearOfDeath - person.yearOfBirth
    } else {
        return (new Date()).getFullYear() - person.yearOfBirth
    }
}

// Do not edit below this line
module.exports = findTheOldest;
