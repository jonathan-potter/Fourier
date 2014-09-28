;(function () {
	var B, fo1, fo2, fs, n, N, t, T, x;

     fs = 44100;	// sampling frequency
	fo1 = 5000;		// operating frequency 1
	fo2 = 10000;    // operating frequency 2
	  N = 1600;		// number of samples
	  T = 1 / fs;   // sampling period

	// simulate signal
    t = 0;			// time in seconds
	x = [];			// sample vector

    _.times(N, function (n) {
		t += T;
		x[n] = {real: Math.cos(2 * Math.PI * fo1 * t) + Math.cos(2 * Math.PI * fo2 * t), imaginary: 0};
	});

	B = JP.Fourier.DFT(N, x);

	plot = function (x, N) {
		var canvas, ctx, data, imageData, n, v;

		canvas = document.getElementById("canvas");
		canvas.width = N;
		canvas.height = N;
		ctx = canvas.getContext("2d");
		imageData = ctx.getImageData(0, 0, N, N);
		var data = imageData.data;

        _.times(N, function (n) {
			// ~~ is equivalent to Math.floor() but faster maybe?;
			i = (~~(x[n].imaginary + N / 2) * N + n) * 4;
			// i = ((N / 2) * N + n) * 4;
			for (var pixel = 0; pixel < 10; pixel++) {
			data[i + 4 * pixel + 0] = 0;
			data[i + 4 * pixel + 1] = 0;
			data[i + 4 * pixel + 2] = 0;
			data[i + 4 * pixel + 3] = 255;
			}
		});

		ctx.putImageData(imageData, 0, 0);
		console.log("done!");
	};

	plot(B, N);
})();