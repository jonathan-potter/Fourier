describe("Fourier", function () {
    describe("DFTMatrix", function () {
        it("generates a DFT Matrix of size 4", function () {
            var correctMatrix, matrix, N;

            N = 4;
            /**
                correctMatrix = [
                    [1,  1,  1,  1],
                    [1, -j, -1,  j],
                    [1, -1,  1, -1],
                    [1,  j, -1, -j],
                ]
             **/
            correctMatrix = [
                [{real: 1, imaginary: 0}, {real:  1, imaginary:  0}, {real:  1, imaginary:  0}, {real:  1, imaginary:  0}],
                [{real: 1, imaginary: 0}, {real: -0, imaginary: -1}, {real: -1, imaginary: -0}, {real:  0, imaginary:  1}],
                [{real: 1, imaginary: 0}, {real: -1, imaginary: -0}, {real:  1, imaginary:  0}, {real:  1, imaginary: -0}],
                [{real: 1, imaginary: 0}, {real:  0, imaginary:  1}, {real: -1, imaginary: -0}, {real: -0, imaginary: -1}]
            ];
            matrix = Fourier.DFTMatrix(N);

            expect(Matrix.complexEquals(matrix, correctMatrix)).toBe(true);
        });
    });

    describe("DFT", function () {
        it("performs a discrete fourier transform on an input vector", function () {
            var B, x, N;

            N = 8;
            /**
                DFT of  x = [1, -1,  1, -1,  1, -1,  1, -1]
                will be B = [0,  0,  0,  0,  8,  0,  0,  0]
             **/
            x = [
                {real:  1, imaginary: 0},
                {real: -1, imaginary: 0},
                {real:  1, imaginary: 0},
                {real: -1, imaginary: 0},
                {real:  1, imaginary: 0},
                {real: -1, imaginary: 0},
                {real:  1, imaginary: 0},
                {real: -1, imaginary: 0}
            ];

            correctB = [
                {real:  0, imaginary: 0},
                {real:  0, imaginary: 0},
                {real:  0, imaginary: 0},
                {real:  0, imaginary: 0},
                {real:  8, imaginary: 0},
                {real:  0, imaginary: 0},
                {real:  0, imaginary: 0},
                {real:  0, imaginary: 0}
            ];

            B = Fourier.DFT(N, x);

            expect(Matrix.complexEquals([B], [correctB])).toBe(true);
        });
    });
});