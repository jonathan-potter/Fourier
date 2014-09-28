;(function () {
	var logBase2, MathStuff, multiply, roundUpToRadix2, vectorOfLength;

	JP = window.JP || {};
    MathStuff = JP.MathStuff = {};

    floatEquals = MathStuff.floatEquals = function (number1, number2) {
        return Math.abs(number1 - number2) < 0.0001;
    };

    logBase2 = MathStuff.logBase2 = function (number) {
        return Math.log(number) / Math.log(2);
    };

    roundUpToRadix2 = MathStuff.roundUpToRadix2 = function (number) {
        return N = Math.floor(Math.pow(2, Math.ceil(JP.MathStuff.logBase2(number))));
    };

    randomInteger = MathStuff.randomIntegerBelow = function (number) {
        return Math.floor(Math.random() * number);
    };

    vectorOfLength = MathStuff.vectorOfLength = function (length) {
        var vector;

        vector = [];
        _.times(length, function (index) {
            vector.push(index)
        });

        return vector;
    };
})();