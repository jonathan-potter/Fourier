;(function () {
	var MathStuff, multiply;

	JP = window.JP || {};
    MathStuff = JP.MathStuff = {};

    floatEquals = MathStuff.floatEquals = function (number1, number2) {
        return Math.abs(number1 - number2) < 0.0001;
    };
})();