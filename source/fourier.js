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
        var N;

        x = JP.Vector.lengthenToRadix2(x);
        N = x.length;

        if (N === 1) {
            return x;
        } else {
            halfVectors = JP.Vector.bisect(x);
            // i think i need a comb bisect
        }
    };
})();