;(function () {
    var bisect, equals, lengthenToRadix2, unzip;

	JP = window.JP || {};
    Vector = JP.Vector = {};

    bisect = Vector.bisect = function (vector) {
        var N;

        N = vector.length;
        return {
             left: vector.slice(0, N / 2),
            right: vector.slice(N / 2)
        };
    };

    equals = Vector.equals = function (vector_1, vector_2) {
        var element_1, element_2, elementIndex, vectorsNotEqual;

        vectorsNotEqual = false;
        if (vector_1.length === vector_2.length) {
            for (elementIndex = 0; elementIndex < vector_1.length; elementIndex++) {
                element_1 = vector_1[elementIndex];
                element_2 = vector_2[elementIndex];

                vectorsNotEqual = vectorsNotEqual || element_1 !== element_2;
            };
        } else {
            vectorsNotEqual = true;
        }

        return !vectorsNotEqual;
    }

    lengthenToRadix2 = Vector.lengthenToRadix2 = function (x) {
        var N, Nshort;

        Nshort = x.length;
        N = JP.MathStuff.roundUpToRadix2(Nshort);;
        if (Nshort < N) {
            _.times((N - Nshort), function () {
                x.push({real: 0, imaginary: 0});
            });
        }

        return x;
    };

    unzip = Vector.unzip = function (vector) {
		if (!(vector instanceof Array)) {
            console.error("not an array!");
        }
        return {
             left: _.select(vector, function (_, elementIndex) { return elementIndex % 2 === 0 }),
            right: _.select(vector, function (_, elementIndex) { return elementIndex % 2 === 1 })
        };
    };

})();