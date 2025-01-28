const reverseString = function(text) {
    let textArray = text.split("");
    let reversedArray = textArray.reverse();
    let joinedArray = reversedArray.join("");

    return joinedArray;
};

// Do not edit below this line
module.exports = reverseString;
