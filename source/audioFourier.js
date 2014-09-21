;(function () {
	var filter, transform;

	AudioFourier = window.AudioFourier || {};

	transform = AudioFourier.transform = function (N, signal) {
        var B, frequencyMatrix, segmentIndex, SEGMENTS, x;

        SEGMENTS = Math.floor(signal.length / N);

        frequencyMatrix = [];
        _.times(SEGMENTS, function (segmentIndex) {
            x = signal.slice(segmentIndex * N, ((segmentIndex + 1) * N));

            xComplex = _.map(x, function (sample) {
                return {real: sample, imaginary: 0};
            });

            B = Fourier.DFT(N, xComplex);

            frequencyMatrix.push(B);
        });

        return frequencyMatrix;
	};

    filter = AudioFourier.filter = function (frequencyMatrix, filter) {
        var complexFilterElement;

        return _.map(frequencyMatrix, function (segment) {
            return _.map(segment, function (sample, sampleIndex) {
                complexFilterElement = {real: filter[sampleIndex], imaginary: 0};

                return Complex.multiply(sample, complexFilterElement);
            });
        });
    };
})();