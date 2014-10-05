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
                real      = Math.cos(  2 * Math.PI * k * n / N );
				imaginary = Math.sin( -2 * Math.PI * k * n / N );

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
        var B, fftVectors, halfVectors, N;

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
            _.times((N / 2), function (k) {
                var imaginary, left, real, right, twiddleFactor;

                left  = fftVectors.left[k];
                right = fftVectors.right[k];

                real          = Math.cos(  2 * Math.PI * k / N );
                imaginary     = Math.sin( -2 * Math.PI * k / N );
                twiddleFactor = {real: real, imaginary: imaginary};
                // console.log("real: " + real + ", imaginary: " + imaginary + ", N: " + N);

                B.firstHalf.push( JP.Complex.addition(    left, JP.Complex.multiply(right, twiddleFactor) ));
                B.secondHalf.push(JP.Complex.subtraction( left, JP.Complex.multiply(right, twiddleFactor) ));
            });

            return B.firstHalf.concat(B.secondHalf);
        }
    };
})();