;(function () {
	var DFT, DFTMatrix, Fourier;

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
})();