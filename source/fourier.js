;(function () {
	var DFT, DFTMatrix;

	Fourier = window.Fourier || {};

	DFTMatrix = Fourier.DFTMatrix = function (N) {
		var imaginary, k, matrix, n, real;

		matrix = [];
		for (n = 0; n < N; n++) {
			matrix.push([]);
			for (k = 0; k < N; k++) {
					 real = Math.cos(2 * Math.PI * k * n / N);
				imaginary = Math.sin(-2 * Math.PI * k * n / N);

				matrix[n][k] = {real: real, imaginary: imaginary};
			}
		}

		return matrix;
	}

	DFT = Fourier.DFT = function (N, x) {
		var B, X;

		X = DFTMatrix(N);

		B = Matrix.complexMultiply(X, x);

		return B;
	}
})();