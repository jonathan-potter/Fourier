;(function () {
	var multiply;

	Complex = window.Complex || {};

    equals = Complex.equals = function (number1, number2) {
        var imaginaryEquals, realEquals;

        realEquals      = MathStuff.floatEquals(number1.real,      number2.real);
        imaginaryEquals = MathStuff.floatEquals(number1.imaginary, number2.imaginary);

        return realEquals && imaginaryEquals;
    };

	multiply = Complex.multiply = function (input1, input2) {
		var imaginary, real;

		     real = (input1.real * input2.real)      - (input1.imaginary * input2.imaginary);
		imaginary = (input1.real * input2.imaginary) + (input1.imaginary * input2.real);

		return {real: real, imaginary: imaginary};
	};

	addition = Complex.addition = function (a, b) {
		var imaginary, real;

			 real = a.real + b.real;
		imaginary = a.imaginary + b.imaginary;

		return {real: real, imaginary: imaginary};
	};
})();