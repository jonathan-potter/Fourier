;(function () {
	var multiply;

	MathStuff = window.MathStuff || {};

    floatEquals = MathStuff.floatEquals = function (number1, number2) {
        return number1 - number2 < 0.0001;
    };
})();