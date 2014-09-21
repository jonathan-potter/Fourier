describe("AudioFourier", function () {
    describe("transform", function () {
        it("transforms a long vector into a matrix of frequencies by time", function () {
            var B, correctB, index, x, N;

            N = 2;
            x = [
                -1,  -1,
                -1,   0,
                 0,  -1,
                 0,   0,
                 0,   1,
                 1,   0,
                 1,   1
            ];

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
                ]
            ];

            B = JP.AudioFourier.transform(N, x);

            expect(JP.Matrix.complexEquals(B, correctB)).toBe(true);
        });
    });

    describe("filter", function () {
        it("applies a filter to a vector of frequency vectors", function () {
            var correctResult, filter, filteredFrequencyMatrix, frequencyMatrix;

            filter = [0.5, 0.75];

            frequencyMatrix = [
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
                ]
            ];

            correctResult = [
                [
                    {real: -0.25, imaginary:  0.00},
                    {real:  0.00, imaginary:  0.00}
                ],
                [
                    {real: -0.50, imaginary:  0.00},
                    {real: -0.75, imaginary:  0.00}
                ],
                [
                    {real: -0.50, imaginary:  0.00},
                    {real:  0.75, imaginary:  0.00}
                ],
                [
                    {real:  0.00, imaginary:  0.00},
                    {real:  0.00, imaginary:  0.00}
                ],
                [
                    {real:  0.50, imaginary:  0.00},
                    {real: -0.75, imaginary:  0.00}
                ],
                [
                    {real:  0.50, imaginary:  0.00},
                    {real:  0.75, imaginary:  0.00}
                ],
                [
                    {real:  1.00, imaginary:  0.00},
                    {real:  0.00, imaginary:  0.00}
                ]
            ];

            filteredFrequencyMatrix = JP.AudioFourier.filter(frequencyMatrix, filter);

            expect(JP.Matrix.complexEquals(filteredFrequencyMatrix, correctResult)).toBe(true);
        });
    });
});