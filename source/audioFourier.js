;(function () {
	var transform;

	AudioFourier = window.AudioFourier || {};

	transform = AudioFourier.transform = function (N, signal) {
        var B, frequencyMatrix, segmentIndex, SEGMENTS, x;

        SEGMENTS = Math.floor(signal.length / N);

        frequencyMatrix = [];
        for (segmentIndex = 0; segmentIndex < SEGMENTS; segmentIndex++) {
            x = signal.slice(segmentIndex * N, ((segmentIndex + 1) * N));

            xComplex = _.map(x, function (sample) {
                return {real: sample, imaginary: 0};
            });

            B = Fourier.DFT(N, xComplex);

            frequencyMatrix.push(B);
        }

        return frequencyMatrix;
	};
})();