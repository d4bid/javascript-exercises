const sumAll = function(num1, num2) {
    let initialNumber = num1 > num2 ? num2 : num1;
    let finalNumber = num1 > num2 ? num1 : num2;
    
    let totalSum = 0;
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (Number.isInteger(num1) === false || Number.isInteger(num2) === false) {
        return "ERROR";
    }

    for (i = initialNumber; i <= finalNumber; i++) {
        totalSum += i;
    }
    
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
