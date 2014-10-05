;(function () {
	var complexEquals, complexMuliply, Matrix;

	JP = window.JP || {};
    Matrix = JP.Matrix = {};

    complexEquals = Matrix.complexEquals = function (X, Y) {
        /** I am assumeing you gave me two equally sized matrices **/
        var k, K, n, N, notEqual;

        if (!(X && X.length && X[0].length)) {
            console.error("Matrix#complexEquals: pass in a matrix!");
            return false;
        }

        N = X.length;
        K = X[0].length;

        notEqual = false;
        _.times(N, function (n) {
            _.times(K, function (k) {
                if (!JP.Complex.equals(X[n][k], Y[n][k])) {
                    notEqual = true;
                }
            });
        });

        return !notEqual;
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
				B[k] =  JP.Complex.addition(JP.Complex.multiply(X[k][n], x[n]), B[k]);
			});
        });

		return B;
	};

})();