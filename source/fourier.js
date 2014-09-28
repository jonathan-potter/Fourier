;(function () {
	var DFT, DFTMatrix, FFT, Fourier;

	JP = window.JP || {};
    Fourier = JP.Fourier = {};

	DFTMatrix = Fourier.DFTMatrix = function (N) {
		var imaginary, k, matrix, n, real;

		matrix = [];
        _.times(N, function (n) {
			matrix.push([]);
			_.times(N, function (k) {
					 real = Math.cos(2 * Math.PI * k * n / N);
				imaginary = Math.sin(-2 * Math.PI * k * n / N);

				matrix[n][k] = {real: real, imaginary: imaginary};
			});
		});

		return matrix;
	};

	DFT = Fourier.DFT = function (N, x) {
		var B, X;

		X = DFTMatrix(N);

		B = JP.Matrix.complexMultiply(X, x);

		return B;
	};

    FFT = Fourier.FFT = function (x) {
        var B, elementIndex, fftVectors, halfVectros, leftElement, n, N, rightElement;

        x = JP.Vector.lengthenToRadix2(x);
        N = x.length;

        if (N === 1) {
            return x;
        } else {
            halfVectors      = JP.Vector.unzip(x);

            fftVectors       = {};
            fftVectors.left  = FFT(halfVectors.left);
            fftVectors.right = FFT(halfVectors.right);

            B = { firstHalf: [], secondHalf: [] };
            for (elementIndex = 0; elementIndex < N / 2; elementIndex++) {
                leftElement  = fftVectors.left[elementIndex];
                rightElement = fftVectors.right[elementIndex];

                B.firstHalf.push(JP.Complex.addition(leftElement, rightElement));
                B.secondHalf.push(JP.Complex.subtraction(leftElement, rightElement));
            }

            var b = B.firstHalf.concat(B.secondHalf);
            console.log(_.map(b, function (thing) { return thing.real }));
            console.log(_.map(b, function (thing) { return thing.imaginary }));
            return B.firstHalf.concat(B.secondHalf);
        }
    };
})();