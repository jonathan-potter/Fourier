;(function () {
	var comlexAddition, complexMuliply;

	Matrix = window.Matrix || {};

    complexEquals = Matrix.complexEquals = function (X, Y) {
        /** I am assumeing you gave me two equally sized matrices **/
        var k, K, n, N;

        N = X.length;
        K = X[0].length;
        for (n = 0; n < N; n++) {
            for (k = 0; k < K; k++) {
                if (!Complex.equals(X[n][k], Y[n][k])) return false;
                console.log("X: " + X[n][k].real +  ", Y: " + Y[n][k].real);
            }
        }

        return true
    };

	complexMuliply = Matrix.complexMultiply = function (X, x) {
		/** this method implements B = X*x **/
		/** X - matrix of size N*N **/
		/** x - vector of xize N **/
		/** B - vector of xize N **/
		var B, k, n, N;

		N = X.length;
		B = [];
		for (k = 0; k < N; k++) {
			B[k] = {real: 0, imaginary: 0};
			for (n = 0; n < N; n++) {
				B[k] =  Complex.addition(Complex.multiply(X[k][n], x[n]), B[k]);
			}
		}

		return B;
	};

})();