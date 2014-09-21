;(function () {
	var comlexAddition, complexMuliply;

	Matrix = window.Matrix || {};

    complexEquals = Matrix.complexEquals = function (X, Y) {
        /** I am assumeing you gave me two equally sized matrices **/
        var k, K, n, N;

        N = X.length;
        K = X[0].length;
        _.times(N, function (n) {
            _.times(K, function (k) {
                if (!Complex.equals(X[n][k], Y[n][k])) return false;
            });
        });

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
        _.times(N, function (k) {

			B[k] = {real: 0, imaginary: 0};
            _.times(N, function (n) {
				B[k] =  Complex.addition(Complex.multiply(X[k][n], x[n]), B[k]);
			});
        });

		return B;
	};

})();