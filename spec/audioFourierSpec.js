describe("AudioFourier", function () {
    describe("transform", function () {
        it("transforms a long vector into a matrix of frequencies by time", function () {
            var B, index, x, N;

            N = 2;
            x = [
                -1,  -1,
                -1,   0,
                 0,  -1,
                 0,   0,
                 0,   1,
                 1,   0,
                 1,   1
            ]

            correctB = [
                [
                    {real: -2, imaginary:  0},
                    {real:  0, imaginary:  0}
                ],
                [
                    {real: -1, imaginary:  0},
                    {real: -1, imaginary:  0}
                ],
                [
                    {real: -1, imaginary:  0},
                    {real:  1, imaginary:  0}
                ],
                [
                    {real:  0, imaginary:  0},
                    {real:  0, imaginary:  0}
                ],
                [
                    {real:  1, imaginary:  0},
                    {real: -1, imaginary:  0}
                ],
                [
                    {real:  1, imaginary:  0},
                    {real:  1, imaginary:  0}
                ],
                [
                    {real:  2, imaginary:  0},
                    {real:  0, imaginary:  0}
                ],
            ];

            B = AudioFourier.transform(N, x);

            _.each(correctB, function (answerSegment, segmentIndex) {
                _.each(answerSegment, function (transformedSample, sampleIndex) {
                    expect(Complex.equals(transformedSample, B[segmentIndex][sampleIndex])).toBe(true);
                    if (!Complex.equals(transformedSample, B[segmentIndex][sampleIndex])) {
                        var thing;
                        thing = B[segmentIndex][sampleIndex];
                        console.log("segment: " + segmentIndex + " sample: " + sampleIndex +  " sample:" + thing.real + " " + thing.imaginary);
                    }
                });
            });
        });
    });
});